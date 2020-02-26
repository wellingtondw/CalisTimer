import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home'
import EMOM from './src/screens/EMOM'

const AppNavigator = createStackNavigator({
  Home,
  EMOM
}, { initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)
