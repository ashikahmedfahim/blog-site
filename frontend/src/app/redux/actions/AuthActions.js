import axios from "axios";
import { apiUrl } from "../../../environmentVariables";
import AuthConstants from "../constants/authConstants";
import HelperConstants from "../constants/helperConstants";

export const signIn = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_IN });
      const { data } = await axios.post(`${apiUrl}/login`, formData);
      localStorage.setItem("token", JSON.stringify(data.data));
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_IN, payload: data.data });
      dispatch({ type: HelperConstants.HAS_SUCCESS, payload: data.message });
    } catch (err) {
      dispatch({
        type: HelperConstants.HAS_ERROR,
        payload: err.response.data.message,
      });
    } finally {
      dispatch({ type: AuthConstants.LOADED_SIGN_IN });
    }
  };
};

export const signUp = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthConstants.IS_LOADING_SIGN_UP });
      const { data } = await axios.post(`${apiUrl}/users`, formData);
      dispatch({ type: AuthConstants.SUCCESSFUL_SIGN_UP, payload: data.data });
      dispatch({ type: HelperConstants.HAS_SUCCESS, payload: data.message });
    } catch (err) {
      dispatch({ type: AuthConstants.HAS_ERROR_SIGN_UP, payload: err.message });
    } finally {
      dispatch({ type: AuthConstants.LOADED_SIGN_UP });
    }
  };
};
