import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

import CartContext from '../CartContext/CartContext';

export const Footer = ({navigation}) => {
  const {quantidade} = useContext(CartContext);

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <IoniconsIcons name="home-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text>{quantidade}</Text>
        <IoniconsIcons name="cart-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <IoniconsIcons name="person-outline" size={30} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
