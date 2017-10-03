import React from 'react';
import {  AppRegistry,  Text,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/login/login';
import Home from './components/home/home';

const Workshop = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: 'Login',
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  }

},{
    headerMode: 'none',

  }
);

AppRegistry.registerComponent('Workshop', () => Workshop);
