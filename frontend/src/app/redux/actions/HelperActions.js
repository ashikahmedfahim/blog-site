import HelperConstants from "../constants/helperConstants";

export const removeSuccess = () => {
  return (dispatch) => {
    dispatch({ type: HelperConstants.REMOVE_SUCCESS });
  }
}

export const removeError = () => {
  return (dispatch) => {
    dispatch({ type: HelperConstants.REMOVE_ERROR });
  };
}