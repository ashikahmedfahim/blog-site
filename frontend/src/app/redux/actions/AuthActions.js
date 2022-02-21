import axios from "axios";
import { apiUrl } from "../../../environmentVariables";
import AuthConstants from "../constants/AuthConstants";

export const signIn = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_IN });
      const { data } = await axios.post(`${apiUrl}/auth/signin`, formData);
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_IN, payload: data.data });
      dispatch({ type: AuthConstants.LOADED_SIGN_IN });
    } catch (err) {
      console.log(err);
      dispatch({ type: AuthConstants.HAS_ERROR_SIGN_IN, payload: err.message });
    }
  };
}

export const signUp = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_UP });
      const { data } = await axios.post(`${apiUrl}/auth/signup`, formData);
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_UP, payload: data.data });
      dispatch({ type: AuthConstants.LOADED_SIGN_UP });
    } catch (err) {
      console.log(err);
      dispatch({ type: AuthConstants.HAS_ERROR_SIGN_UP, payload: err.message });
    }
  };
}