import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';

import {ProductCard} from '../../components/ProductCard';

import ProductService from '../../services/ProductService';

import FeatherIcons from 'react-native-vector-icons/Feather';

export const Home = () => {
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
          <View style={styles.header}>
            <Text style={styles.headerTitle}>V.E.I.A</Text>
            <TouchableOpacity>
              <FeatherIcons name="settings" size={25} color={'#000'} />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductCard product={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={numColumns}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              style={{height: '100%'}}
            />
          </View>

          <View style={styles.menu}></View>
        </View>
      </LinearGradient>
    </>
  );
};
