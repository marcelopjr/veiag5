import React, {useState, useContext, useRef} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import {ProductSet} from '../../components/ProductSet';

import ProductService from '../../services/ProductService';

import Feathericons from 'react-native-vector-icons/Feather';

import {NewProduct} from '../../components/Modals/NewProduct/NewProduct';
import {UpdateProduct} from '../../components/Modals/UpdateProduct/UpdateProduct';
import {FindById} from '../../components/Modals/FindById/FindById'

import ProductContext from '../../components/ProductContext/ProductContext';

export const ProductSetting = ({navigation}) => {
  const {products, getProductsAtt} = useContext(ProductContext);
  const [update, isUpdate] = useState(false);
  const modalizeRef = useRef(null);
  const modalizeRefFindById = useRef(null);
  const modalizeRefUpdateProduct = useRef(null);
  const [product, setProduct] = useState();

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

  const onOpenModalFindById = () => {
    modalizeRefFindById.current?.open();
  };

  const onOpenModalUpdateProduct = () => {
    modalizeRefUpdateProduct.current?.open();
  };

  function refreshing() {
    getProductsAtt();
  }

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#6A5ACD', '#836FFF']}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          <View style={styles.body}>
            <FlatList
              data={products}
              renderItem={({item}) => (
                <ProductSet
                  product={item}
                  onOpenModalUpdateProduct={onOpenModalUpdateProduct}
                  setProduct={setProduct}
                />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              refreshing={update}
              onRefresh={() => refreshing()}
            />
          </View>
          <Footer navigation={navigation} />
        </View>

        <TouchableOpacity style={styles.btnSearch} onPress={() => onOpenModalFindById()}>
          <Feathericons name='search' size={35} color={'#FFF'} />
        </TouchableOpacity>
        
        <FindById modalizeRef={modalizeRefFindById} />  

        <TouchableOpacity style={styles.btnAdd} onPress={() => onOpenModal()}>
          <Feathericons name="plus-circle" size={35} color={'#FFF'} />
        </TouchableOpacity>

        <NewProduct modalizeRef={modalizeRef} />

        

        <UpdateProduct
          product={product}
          modalizeRef={modalizeRefUpdateProduct}
        />

        
      </LinearGradient>
    </>
  );
};
