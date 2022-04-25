import React from "react";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const RichTextEditor = (props) => {
  const [editorValue, setEditorValue] = React.useState("");

  const handleChange = (value) => {
    setEditorValue(value);
    props.onChange(value);
  };
  return (
    <div>
      <ReactQuill
        placeholder="Write something..."
        value={editorValue}
        onChange={handleChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
      />
    </div>
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
    ["code-block"],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
  ],
};
RichTextEditor.format = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
];

export default RichTextEditor;
