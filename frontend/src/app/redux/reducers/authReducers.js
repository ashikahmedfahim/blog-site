import authConstants from "../constants/authConstants";

export const authReducers = (state = {}, action) => {
  switch (action.type) {
    case authConstants.IS_LOADING_SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case authConstants.SUCCESSFUL_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case authConstants.LOADED_SIGN_IN:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    case authConstants.HAS_ERROR_SIGN_IN:
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };
    case authConstants.REMOVE_ERROR_SIGN_IN:
      return {
        ...state,
        hasError: false,
        message: "",
      };
    case authConstants.IS_LOADING_SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    case authConstants.SUCCESSFUL_SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case authConstants.LOADED_SIGN_UP:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    case authConstants.HAS_ERROR_SIGN_UP:
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };
    case authConstants.REMOVE_ERROR_SIGN_UP:
      return {
        ...state,
        hasError: false,
        message: "",
      };
    default:
      return state;
  }
};
