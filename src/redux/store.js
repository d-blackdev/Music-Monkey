import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// clearDataFromStorage();
const initialState = {};

const persistConfig = {
  key: 'main',
  storage: AsyncStorage,
};
const authConfig = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
let persistor = persistStore(store);
export {store, persistor};
