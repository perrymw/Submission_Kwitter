import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_USERS                 = "GET_USERS";
export const GET_USERS_SUCCESS         = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL            = "GET_USERS_FAIL";
export const GET_USER                  = "GET_USER";
export const GET_USER_SUCCESS          = "GET_USER_SUCCESS";
export const GET_USER_FAIL             = "GET_USER_FAIL";
export const GET_USER_PHOTO            = "GET_USER_PHOTO";
export const GET_USER_PHOTO_SUCCESS    = "GET_USER_PHOTO_SUCCESS";
export const GET_USER_PHOTO_FAIL       = "GET_USER_PHOTO_FAIL";
export const CREATE_USER               = "CREATE_USER";
export const CREATE_USER_SUCCESS       = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL          = "CREATE_USER_FAIL";
export const UPDATE_USER_PHOTO         = "UPDATE_USER_PHOTO";
export const UPDATE_USER_PHOTO_SUCCESS = "UPDATE_USER_PHOTO_SUCCESS";
export const UPDATE_USER_PHOTO_FAIL    = "UPDATE_USER_PHOTO_FAIL";
export const UPDATE_USER               = "UPDATE_USER";
export const UPDATE_USER_SUCCESS       = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL          = "UPDATE_USER_FAIL";
export const DELETE_USER               = "DELETE_USER";
export const DELETE_USER_SUCCESS       = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL          = "DELETE_USER_FAIL";


const url = domain + "/users";

// action creators
const getUsers = (userData = {}) => dispatch => {
  //userData is an object {limit, offset}
  dispatch({
    type: GET_USERS
  })

  return fetch(url)
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
  }

const getUser = userData => dispatch => {
  //userData is an object {userId:useruserId}
  dispatch({
    type: GET_USER
  });
  return fetch(url+"/"+userData.userId)
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USER_FAIL, payload: err.message })
      );
    });
};

const getUserPhoto = userData => (dispatch, getState) => {
  //userData is an object {userId:useruserId}
  dispatch({
    type: GET_USER_PHOTO
  });
  const store = getState()
  let userId = (store.auth.login && store.auth.login.id) || 5

  return fetch(url+`/${userId}/picture`)
    .then(result => {
      return dispatch({
        type: GET_USER_PHOTO_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USER_PHOTO_FAIL, payload: err.message })
      );
    });
};

const createUser = userData => dispatch => {
  console.log("CreateUser Action is Triggered")
  //userData is an object {username, displayname, password}
  dispatch({
    type: CREATE_USER
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      return dispatch({
        type: CREATE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_USER_FAIL, payload: err.message })
      );
    });
};

const updateUserPhoto = userData => (dispatch, getState) => {
    //userData is an object {userId:useruserId, picture}
  dispatch({
    type: UPDATE_USER_PHOTO
  });

  const userId = getState().auth.login.id
  const token = getState().auth.login.token

  return fetch(url+`/${userId}/picture`, {
    method: "PUT",
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
  },
    body: userData.form
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_USER_PHOTO_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_USER_PHOTO_FAIL, payload: err.message })
      );
    });
};

const updateUser = userData => dispatch => {
    //userData is an object {limit, offset}
  dispatch({
    type: UPDATE_USER
  });

  return fetch(url+"/"+userData.userId, {
    method: "patch",
    headers: {...jsonHeaders, Authorization: `Bearer ${userData.token}`},
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_USER_FAIL, payload: err.message })
      );
    });
};

const deleteUser = userData => dispatch => {
    //userData is an object {limit, offset}
  dispatch({
    type: DELETE_USER
  });

  return fetch(url + "/" + userData.userId, {
    method: "DELETE",
    headers: {Authorization: `Bearer ${userData.token}`},
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETE_USER_FAIL, payload: err.message })
      );
    });
};


export const getUsersAction = userData => dispatch => {
  return dispatch(getUsers(userData))
};
export const getUserAction = userData => dispatch => {
  return dispatch(getUser(userData))
};
export const getUserPhotoAction = userData => dispatch => {
  return dispatch(getUserPhoto(userData))
};
export const createUserAction = userData => dispatch => {
  return dispatch(createUser(userData))
};
export const deleteUserAction = userData => dispatch => {
  return dispatch(deleteUser(userData))
};
export const updateUserPhotoAction = userData => dispatch => {
  return dispatch(updateUserPhoto(userData))
};
export const updateUserAction = userData => dispatch => {
  return dispatch(updateUser(userData))
};
