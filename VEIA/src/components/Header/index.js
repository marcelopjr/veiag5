import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>V.E.I.A.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductSetting')}>
        <FeatherIcons name="settings" size={25} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
