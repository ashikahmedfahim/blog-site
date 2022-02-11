import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/PostAction";

const Home = () => {
  const [posts, setPosts] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  let data = useSelector((state) => state);
  console.log(data);

  return (
    <Container maxWidth="xl">
      <h1>Home</h1>
      <Form />
    </Container>
  );
};

export default Home;
