import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import {ProductSet} from '../../components/ProductSet';

import ProductService from '../../services/ProductService';

export const ProductSetting = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProduto().then(data => setProducts(data));
  }, []);

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#00BFFF', '#87CEFA']}>
        <View style={styles.container}>
          <Header navigation={navigation}/>
          <View style={styles.body}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductSet product={item} />}
              keyExtractor={item => item.id} 
            />
          </View>
          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
