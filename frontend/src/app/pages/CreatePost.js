import React from "react";
import { Container } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";

const CreatePost = () => {
  const [editorValue, setEditorValue] = React.useState("");
  const handleChange = (value) => {
    setEditorValue(value);
  };
  return (
    <Container maxWidth="xl">
      <RichTextEditor onChange={handleChange} />
      <section>{editorValue}</section>
    </Container>
  );
};

export default CreatePost;
