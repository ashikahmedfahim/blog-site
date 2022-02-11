import TagConstants from "../constants/tagConstants";

export const tagReducers = (state = {}, action) => {
  switch (action.type) {
    case TagConstants.GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case TagConstants.GET_ONE_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case TagConstants.CREATE_ONE_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case TagConstants.UPDATE_ONE_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case TagConstants.DELETE_ONE_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case TagConstants.IS_LOADING_TAG:
      return {
        ...state,
        isLoading: true,
      };
    case TagConstants.LOADED_TAG:
      return {
        ...state,
        isLoading: false,
      };
    case TagConstants.HAS_ERROR_TAG:
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };
    case TagConstants.REMOVE_ERROR_TAG:
      return {
        ...state,
        hasSuccess: false,
        message: "",
      };
    default:
      return state;
  }
};
