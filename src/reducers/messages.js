import { 
GET_MESSAGES,
GET_MESSAGES_SUCCESS,
GET_MESSAGES_FAIL,
GET_MESSAGE,
GET_MESSAGE_SUCCESS,
GET_MESSAGE_FAIL,
CREATE_MESSAGE,
CREATE_MESSAGE_SUCCESS,
CREATE_MESSAGE_FAIL,
DELETE_MESSAGE,
DELETE_MESSAGE_SUCCESS,
DELETE_MESSAGE_FAIL,
} from "../actions";



const initialState = {
  messageLoading: false,
  message: null,
  messageError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messageLoading: true,
        messageError: null
      };
    case GET_MESSAGES_SUCCESS:
      return { ...state, message: action.payload, messageLoading: false };
    case GET_MESSAGES_FAIL:
      return { ...state, messageError: action.payload, messageLoading: false };
      
    case GET_MESSAGE:
      return {
        ...state,
        messageLoading: true,
        messageError: null
      };
    case GET_MESSAGE_SUCCESS:
      return { ...state, message: action.payload, messageLoading: false };
    case GET_MESSAGE_FAIL:
        return { ...state, messageError: action.payload, messageLoading: false };
      
    case CREATE_MESSAGE:
      return {
        ...state,
        messageLoading: true,
        messageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return { ...state, message: action.payload, messageLoading: false };
    case CREATE_MESSAGE_FAIL:
      return { ...state, messageError: action.payload, messageLoading: false };

    case DELETE_MESSAGE:
      return {
        ...state,
        messageLoading: true,
        messageError: null
      };
    case DELETE_MESSAGE_SUCCESS:
      return { ...state, message: action.payload, messageLoading: false };
    case DELETE_MESSAGE_FAIL:
      return { ...state, messageError: action.payload, messageLoading: false };
      

    default:
      return state;
  }
};
