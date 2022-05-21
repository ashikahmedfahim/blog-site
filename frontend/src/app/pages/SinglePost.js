import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOnePost } from "../redux/actions/PostActions";
import CircularIndeterminate from "../components/CircularIndeterminate";
import { removeSuccess, removeError } from "../redux/actions/HelperActions";
import SnackBar from "../components/SnackBar";

const SinglePost = () => {
  let { id } = useParams();
  const { isLoading, hasError, message, row } = useSelector(
    (state) => state.postStore
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePost(id));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <CircularIndeterminate />}
      {hasError && message ? (
        <SnackBar
          severity={"error"}
          message={message}
          onClose={() => {
            dispatch(removeError());
          }}
        />
      ) : null}
      {!hasError && message ? (
        <SnackBar
          severity={"success"}
          message={message}
          onClose={() => {
            dispatch(removeSuccess());
          }}
        />
      ) : null}
      {row && <div>{row.title}</div>}
    </div>
  );
};

export default SinglePost;
