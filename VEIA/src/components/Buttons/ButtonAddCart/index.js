import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

import FeatherIcons from 'react-native-vector-icons/Feather';

export const ButtonAddCart = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FeatherIcons name="shopping-cart" size={20} color={'#000'} />

      <Text>Add Carrinho</Text>
    </TouchableOpacity>
  );
};
