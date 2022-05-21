import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/PostActions";
import CircularIndeterminate from "../components/CircularIndeterminate";
import { removeSuccess, removeError } from "../redux/actions/HelperActions";
import SnackBar from "../components/SnackBar";

const Home = () => {
  let { isLoading, hasError, message, rows, total } = useSelector(
    (state) => state.postStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <h1>Home</h1>
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
      {rows && rows.map((item) => <p key={item.id}>{item.title}</p>)}
    </Container>
  );
};

export default Home;
