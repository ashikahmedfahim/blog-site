import PostConstants from "../constants/postConstants";

export const postReducers = (state = {}, action) => {
  switch (action.type) {
    case PostConstants.GET_ALL_POSTS:
      return {
        ...state,
        rows: action.payload.rows,
        total: action.payload.count,
        message: action.payload.message,
      };
    case PostConstants.GET_ONE_POST:
      return {
        ...state,
        row: action.payload,
        message: action.payload.message,
      };
    case PostConstants.CREATE_ONE_POST:
      return {
        ...state,
        row: action.payload,
        message: action.payload.message,
      };
    case PostConstants.UPDATE_ONE_POST:
      return {
        ...state,
        row: action.payload,
        message: action.payload.message,
      };
    case PostConstants.DELETE_ONE_POST:
      return {
        ...state,
        row: action.payload,
        message: action.payload.message,
      };
    case PostConstants.IS_LOADING_POST:
      return {
        ...state,
        isLoading: true,
      };
    case PostConstants.LOADED_POST:
      return {
        ...state,
        isLoading: false,
      };
    case PostConstants.HAS_ERROR_POST:
      return {
        ...state,
        hasError: true,
        message: action.payload.message,
      };
    case PostConstants.REMOVE_ERROR_POST:
      return {
        ...state,
        hasError: false,
        message: "",
      };
    default:
      return state;
  }
};
