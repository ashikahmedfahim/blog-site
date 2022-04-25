import React from "react";
import { Container } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";
import ReactQuill from "react-quill";

const CreatePost = () => {
  const [editorValue, setEditorValue] = React.useState("");
  const handleChange = (value) => {
    setEditorValue(value);
  };
  return (
    <Container maxWidth="xl">
      <RichTextEditor onChange={handleChange} />
      <ReactQuill
        width="100%"
        className="prose prose-lg"
        value={editorValue}
        readOnly={true}
        theme={"bubble"}
      />
    </Container>
  );
};

export default CreatePost;
