import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {userLoginReducer} from './Reducers/AuthReducers/index';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'myAuthTokens',
});

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
};

const tokenPersistConfig = {
  key: 'authToken',
  storage: sensitiveStorage,
};

const RootReducer = combineReducers({
  main: persistReducer(
    mainPersistConfig,
    combineReducers({
      network,
    }),
  ),
  authToken: persistReducer(
    tokenPersistConfig,
    combineReducers({
      userLogin: userLoginReducer,
    }),
  ),
});

export default RootReducer;
