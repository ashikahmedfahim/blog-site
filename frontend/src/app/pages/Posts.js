import React from "react";
import Post from "../components/Post";
import { Container } from "@mui/material";

const Posts = () => {
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <Post id={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Posts;
