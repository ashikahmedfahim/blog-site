import axios from "axios";
import { apiUrl } from "../../../environmentVariables";
import PostConstants from "../constants/postConstants";

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PostConstants.IS_LOADING_POST });
      const { data } = await axios.get(`${apiUrl}/posts`);
      dispatch({ type: PostConstants.GET_ALL_POSTS, payload: data.data });
      dispatch({ type: PostConstants.LOADED_POST });
    } catch (err) {
      console.log(err);
      dispatch({ type: PostConstants.HAS_ERROR_POST, payload: err.message });
    }
  };
};
