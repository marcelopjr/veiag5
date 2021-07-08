import React from 'react';
import {StatusBar} from 'react-native';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import {Home} from './src/screens/Home';

// import { Container } from './styles';

const VEIA = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </NavigationContainer>
  );
};

export default VEIA;
