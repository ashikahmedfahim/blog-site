import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PostForm from "../components/PostForm";
import { useSelector, useDispatch } from "react-redux";
import { createOnePost } from "../redux/actions/PostActions";
import CircularIndeterminate from "../components/CircularIndeterminate";
import { removeSuccess, removeError } from "../redux/actions/HelperActions";
import SnackBar from "../components/SnackBar";

const CreatePost = () => {
  let { isLoading, hasError, message, rows, total } = useSelector(
    (state) => state.postStore
  );
  const dispatch = useDispatch();

  const savePost = (formData) => {
    dispatch(createOnePost(formData));
  };

  useEffect(() => {}, []);

  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
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
          <PostForm handlePost={savePost} />
        </div>
      </div>
    </Container>
  );
};

export default CreatePost;
