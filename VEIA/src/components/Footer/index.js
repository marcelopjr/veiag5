import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

export const Footer = () => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity>
        <IoniconsIcons name="home-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity>
        <IoniconsIcons name="cart-outline" size={30} color={'#000'} />
      </TouchableOpacity>

      <TouchableOpacity>
        <IoniconsIcons name="person-outline" size={30} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
