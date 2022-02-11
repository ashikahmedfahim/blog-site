import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/PostAction";
import CircularIndeterminate from "../components/CircularIndeterminate";

const Home = () => {
  let data = useSelector((state) => state.postStore);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <h1>Home</h1>
      {data.isLoading && <CircularIndeterminate />}
      {data.hasError && data.message ? data.message : null}
      {!data.hasError && data.message ? data.message : null}
      {data.rows && data.rows.map((item) => <p key={item.id}>{item.title}</p>)}
    </Container>
  );
};

export default Home;
