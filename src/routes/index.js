import React, {useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import MainBottomTab from './BottomNav/index';
import Chat from '../screens/Chat';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthToken} from '../utils/asyncStorage';

const Stack = createStackNavigator();

const RootStack = () => {
  const userLogin = useSelector(state => state.authToken.userLogin);
  const {token: userToken} = userLogin;
  const [token, setToken] = useState('');
  useEffect(() => {
    getAuthToken('user_token')
      .then(res => {
        setToken(res);
      })
      .catch(err => console.log(err));
  }, [token, userToken]);
  return (
    <>
      {token || userToken ? (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Tab">
          <Stack.Screen name="Tab" component={MainBottomTab} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default RootStack;
