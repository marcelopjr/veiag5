import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {ProductSetting} from '../screens/ProductSetting';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';

const AppStack = createStackNavigator();

export const Routes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerTransparent: true, headerShown: false}}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="ProductSetting" component={ProductSetting} />
      <AppStack.Screen name="Cart" component={Cart} />
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};
