import PostConstants from "../constants/postConstants";

export const postReducers = (state = {}, action) => {
  switch (action.type) {
    case PostConstants.GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case PostConstants.GET_ONE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case PostConstants.CREATE_ONE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case PostConstants.UPDATE_ONE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case PostConstants.DELETE_ONE_POST:
      return {
        ...state,
        post: action.payload,
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
        errorMessage: action.payload,
      };
    case PostConstants.HAS_MESSAGE_POST:
      return {
        ...state,
        hasMessage: true,
        message: action.payload,
      };
  }
};
