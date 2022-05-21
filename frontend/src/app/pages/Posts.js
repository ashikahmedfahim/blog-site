import React, { useEffect } from "react";
import Post from "../components/Post";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/PostActions";
import CircularIndeterminate from "../components/CircularIndeterminate";

const Posts = (props) => {
  const dispatch = useDispatch();

  const { isLoading, rows, total } = useSelector((state) => state.postStore);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        {isLoading && <CircularIndeterminate />}
        {rows && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 py-5">
            {rows.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Posts;
