import axios from "axios";
import { apiUrl } from "../../../environmentVariables";
import PostConstants from "../constants/postConstants";

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PostConstants.IS_LOADING_POST });
      const res = await axios.get(`${apiUrl}/tags`);
      dispatch({ type: PostConstants.GET_ALL_POSTS, payload: res.data });
      dispatch({ type: PostConstants.LOADED_POST });
    } catch (err) {
      console.log(err);
      dispatch({ type: PostConstants.HAS_ERROR_POST, payload: err.message });
    }
  };
};
