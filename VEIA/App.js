import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';

import {Routes} from './src/routes';
import {CartProvider} from './src/components/CartContext/CartContext';
import {ProductProvider} from './src/components/ProductContext/ProductContext';

// import { Container } from './styles';

const VEIA = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ProductProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductProvider>
    </NavigationContainer>
  );
};

export default VEIA;
