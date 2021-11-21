import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  CLEAR_ERROR,
} from '../../Constants/index';

export const userLoginReducer = (
  state = {
    loading: false,
    error: '',
    status: false,
    token: '',
    
    user: {},
  },
  {type, payload},
) => {
  switch (type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        status: false,
        token: '',
        user: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        status: payload.message,
        token: payload.data.Token,
        user: payload.data,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        status: false,
        token: '',
        user: {},
      };
    case USER_LOGIN_LOGOUT:
      return {
        ...state,
        loading: false,
        error: '',
        token: '',
        status: false,
        user: {},
      };

    case CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: '',
        status: false,
      };

    default:
      return state;
  }
};
