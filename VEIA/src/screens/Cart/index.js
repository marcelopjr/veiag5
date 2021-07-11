import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import CartContext from '../../components/CartContext/CartContext';

import {ProductCart} from '../../components/ProductCart';
import {useState} from 'react/cjs/react.development';

export const Cart = ({navigation}) => {
  const {product, quantidade} = useContext(CartContext);

  const total = product.reduce((valorTotal, product) => {
    return valorTotal + product.valor * product.amount;
  }, 0);

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#6A5ACD', '#836FFF']}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          {quantidade > 0 ? (
            <Text style={styles.total}>Total: {total}</Text>
          ) : (
            <Text style={styles.total}></Text>
          )}

          <View style={styles.body}>
            {quantidade > 0 ? (
              <FlatList
                data={product}
                renderItem={({item}) => <ProductCart product={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <Text style={styles.cartAlert}>Carrinho Vazio</Text>
            )}
          </View>
          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
