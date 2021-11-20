import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import MainBottomTab from './BottomNav/index'
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={MainBottomTab} />
    </Stack.Navigator>
  );
};

export default RootStack;
