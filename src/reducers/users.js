import {  GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL, 
          GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, 
          GET_USER_PHOTO, GET_USER_PHOTO_SUCCESS, GET_USER_PHOTO_FAIL,
          CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL, 
          UPDATE_USER_PHOTO, UPDATE_USER_PHOTO_SUCCESS, UPDATE_USER_PHOTO_FAIL, 
          UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, 
          DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAIL} from "../actions"




const initialState = {
  usersLoading: false,
  users: null,
  usersError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload.users, usersLoading: false };
    case GET_USERS_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      };
    case GET_USER_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case GET_USER_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case GET_USER_PHOTO:
      return {
        ...state,
        getUserPhotoLoading: true,
        getUserPhotoError: null
      };
    case GET_USER_PHOTO_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case GET_USER_PHOTO_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case CREATE_USER:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case CREATE_USER_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case CREATE_USER_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case UPDATE_USER_PHOTO:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case UPDATE_USER_PHOTO_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case UPDATE_USER_PHOTO_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case UPDATE_USER:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case UPDATE_USER_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case UPDATE_USER_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    case DELETE_USER:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case DELETE_USER_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case DELETE_USER_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };

    default:
      return state;
  }
};
