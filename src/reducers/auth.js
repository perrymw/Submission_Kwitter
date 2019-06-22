import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL  } from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem('auth')) || initialState
}

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
      case LOGIN_SUCCESS:
      return { ...state, login: action.payload, token:action.payload.token, userId:action.payload.id, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    case LOGOUT:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGOUT_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGOUT_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    default:
      return state;
  }
};
