import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

import CartContext from '../CartContext/CartContext';

export const Footer = ({navigation}) => {
  const {product} = useContext(CartContext);

  const quantidadeTotalAmount = product.reduce((valorTotal, product) => {
    return valorTotal + product.amount;
  }, 0);

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.btnHome}
        onPress={() => navigation.navigate('Home')}>
        <IoniconsIcons name="home-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnCart}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={{marginBottom: 33}}>{quantidadeTotalAmount}</Text>
        <IoniconsIcons name="cart-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnProfile}
        onPress={() => navigation.navigate('Profile')}>
        <IoniconsIcons name="person-outline" size={30} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
