import React, {useState, useEffect, useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';

import {ProductCard} from '../../components/ProductCard';

import ProductService from '../../services/ProductService';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

export const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  const numColumns = 2;

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
              renderItem={({item}) => <ProductCard product={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={numColumns}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </View>

          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
