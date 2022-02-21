import axios from "axios";
import { apiUrl, headersConfig } from "../../../environmentVariables";
import AuthConstants from "../constants/authConstants";

export const signIn = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_IN });
      const res = await axios.post(
        `${apiUrl}/login`,
        formData,
        headersConfig
      );
      console.log(res);
      const { data } = res;
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_IN, payload: data.data });
      dispatch({ type: AuthConstants.LOADED_SIGN_IN });
    } catch (err) {
      dispatch({ type: AuthConstants.HAS_ERROR_SIGN_IN, payload: err.response.data.message });
    }
  };
};

export const signUp = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_UP });
      const { data } = await axios.post(
        `${apiUrl}/users`,
        formData,
        headersConfig
      );
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_UP, payload: data.data });
      dispatch({ type: AuthConstants.LOADED_SIGN_UP });
    } catch (err) {
      dispatch({ type: AuthConstants.HAS_ERROR_SIGN_UP, payload: err.message });
    }
  };
};
