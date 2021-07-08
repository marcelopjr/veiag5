import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

import CartContext from '../../components/CartContext/CartContext';

import {ProductCart} from '../../components/ProductCart';

export const Cart = ({navigation}) => {
  const {product, quantidade} = useContext(CartContext);

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#00BFFF', '#87CEFA']}>
        <View style={styles.container}>
          <Header navigation={navigation} />
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
