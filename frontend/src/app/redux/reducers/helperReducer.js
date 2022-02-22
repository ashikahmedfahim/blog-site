import helperConstants from "../constants/helperConstants";

export const helperReducer = (state = {}, action) => {
  switch (action.type) {
    case helperConstants.HAS_ERROR:
      return {
        ...state,
        hasError: true,
        hasSuccess: false,
        message: action.payload,
      };
    case helperConstants.REMOVE_ERROR:
      return {
        ...state,
        hasError: false,
        message: "",
      };
    case helperConstants.HAS_SUCCESS:
      return {
        ...state,
        hasSuccess: true,
        hasError: false,
        message: action.payload,
      };
    case helperConstants.REMOVE_SUCCESS:
      return {
        ...state,
        hasSuccess: false,
        message: "",
      };
    default:
      return state;
  }
};
