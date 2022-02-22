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
        isLoading: false,
        isAuthenticated: true,
        userData: action.payload.data,
        message: action.payload.message,
      };
    case authConstants.LOADED_SIGN_IN:
      return {
        ...state,
        isLoading: false,
      };
    case authConstants.IS_LOADING_SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    case authConstants.SUCCESSFUL_SIGN_UP:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userData: action.payload,
      };
    case authConstants.LOADED_SIGN_UP:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
