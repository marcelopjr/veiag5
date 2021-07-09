import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import {ProductSet} from '../../components/ProductSet';

import ProductService from '../../services/ProductService';

import Feathericons from 'react-native-vector-icons/Feather';

import { NewProduct } from '../../components/Modals/NewProduct';

export const ProductSetting = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  const modalizeRef = useRef(null);

  const onOpenModal = () => {
    modalizeRef.current?.open();
  }

  useEffect(() => {
    productService.getProduto().then(data => setProducts(data));
  }, []);

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
            />
          </View>
          <Footer navigation={navigation} />
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={() => onOpenModal()}> 
          <Feathericons name='plus-circle' size={35} color={'#FFF'}/>
        </TouchableOpacity>
        <NewProduct modalizeRef={modalizeRef} />
      </LinearGradient>
    </>
  );
};
