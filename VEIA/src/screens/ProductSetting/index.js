import React, {useState, useContext, useRef} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import {ProductSet} from '../../components/ProductSet';

import ProductService from '../../services/ProductService';

import Feathericons from 'react-native-vector-icons/Feather';

import {NewProduct} from '../../components/Modals/NewProduct';

import ProductContext from '../../components/ProductContext/ProductContext';

export const ProductSetting = ({navigation}) => {
  const {products, getProductsAtt} = useContext(ProductContext);
  const [update, isUpdate] = useState(false);
  const modalizeRef = useRef(null);

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

  function refreshing() {
    getProductsAtt();
  }

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#00BFFF', '#87CEFA']}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          <View style={styles.body}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductSet product={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              refreshing={update}
              onRefresh={() => refreshing()}
            />
          </View>
          <Footer navigation={navigation} />
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={() => onOpenModal()}>
          <Feathericons name="plus-circle" size={35} color={'#FFF'} />
        </TouchableOpacity>
        <NewProduct modalizeRef={modalizeRef} />
      </LinearGradient>
    </>
  );
};
