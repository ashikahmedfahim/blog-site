import React from "react";
import { Container } from "@mui/material";
import PostForm from "../components/PostForm";

const CreatePost = () => {
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <PostForm />
        </div>
      </div>
    </Container>
  );
};

export default CreatePost;
