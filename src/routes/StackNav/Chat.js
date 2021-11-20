import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../../screens/Chat';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Chat">
      <Stack.Screen name="MainChat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
