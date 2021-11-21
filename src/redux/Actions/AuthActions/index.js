import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  CLEAR_ERROR,
} from '../../Constants/index';
import axios from 'axios';
import {
  deleteAuthToken,
  removeDataFromStorage,
  saveDataToStorage,
  setAuthToken,
} from '../../../utils/asyncStorage';

export const login = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_LOADING,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 60000,
      timeoutErrorMessage:
        "Couldn't connect to the server. Poor network connection",
    };
    const {data} = await axios.post(
      `http://restapi.adequateshop.com/api/authaccount/registration`,
      {name, email, password},
      config,
    );

    console.log(data, 'LOGIN DATA');
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
      if (data) {
        setAuthToken('user_token', data.data.Token);
        saveDataToStorage('user_data', data.data);
      }
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => dispatch => {
  deleteAuthToken('user_token');
  removeDataFromStorage('user_data');

  dispatch({
    type: USER_LOGIN_LOGOUT,
  });
};
