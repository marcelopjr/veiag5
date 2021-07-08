import React from 'react';
import {StatusBar} from 'react-native';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import {CartProvider} from './src/components/CartContext/CartContext';

// import { Container } from './styles';

const VEIA = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <CartProvider>
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
};

export default VEIA;
