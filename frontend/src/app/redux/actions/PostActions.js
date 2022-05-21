import axios from "axios";
import { apiUrl } from "../../../environmentVariables";
import PostConstants from "../constants/postConstants";
import HelperConstants from "../constants/helperConstants";

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PostConstants.IS_LOADING_POST });
      const { data } = await axios.get(`${apiUrl}/posts`);
      dispatch({ type: PostConstants.GET_ALL_POSTS, payload: data.data });
    } catch (err) {
      dispatch({ type: PostConstants.HAS_ERROR_POST, payload: err });
    } finally {
      dispatch({ type: PostConstants.LOADED_POST });
    }
  };
};

export const getOnePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PostConstants.IS_LOADING_POST });
      const { data } = await axios.get(`${apiUrl}/posts/${id}`);
      dispatch({ type: PostConstants.GET_ONE_POST, payload: data.data });
    } catch (err) {
      dispatch({ type: PostConstants.HAS_ERROR_POST, payload: err });
    } finally {
      dispatch({ type: PostConstants.LOADED_POST });
    }
  };
};

export const createOnePost = (post) => {
  return async (dispatch) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("token"));
      dispatch({ type: PostConstants.IS_LOADING_POST });
      const { data } = await axios.post(`${apiUrl}/posts`, post);
      dispatch({ type: PostConstants.CREATE_ONE_POST, payload: data.data });
      dispatch({ type: HelperConstants.HAS_SUCCESS, payload: data.message });
    } catch (err) {
      dispatch({ type: PostConstants.HAS_ERROR_POST, payload: err });
    } finally {
      dispatch({ type: PostConstants.LOADED_POST });
    }
  };
};
