import { domain, handleJsonResponse } from "./constants";

// action types
import { store } from '../index'

export const LIKE = "LIKE";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAIL = "LIKE_FAIL";
export const UNLIKE = "UNLIKE";
export const UNLIKE_SUCCESS = "UNLIKE_SUCCESS";
export const UNLIKE_FAIL = "UNLIKE_FAIL";



const url = domain + "/likes";

// action creators
const like = likeData => dispatch => {
  //likeData is an object {messageId:messageId}
  const token = store.getState().auth.login.token
  dispatch({
    type: LIKE
  });
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({messageId:likeData.id})
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LIKE_FAIL, payload: err.message })
      );
    });
};

const unlike = likeData => dispatch => {
  //likeData is an object {id:likeId} likeids have to be retrieved from a message object
  dispatch({
    type: UNLIKE
  });

  return fetch(url +`/${likeData.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${likeData.token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UNLIKE_SUCCESS,
        payload: result //OK
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UNLIKE_FAIL, payload: err.message })
      );
    });
};

export const likePost = likeData => dispatch => {
  return dispatch(like(likeData))
};

export const unlikePost = likeData => dispatch => {
  return dispatch(unlike(likeData))
};