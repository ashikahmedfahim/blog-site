import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PostForm = (props) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
  const PostSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PostSchema),
  });

  const handleFormSubmit = (formData) => {
    if (selectedFile) {
      formData.file = selectedFile;
    }
    props.handlePost(formData);
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Paper elevation={3} className="p-10 my-10">
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          className="text-center py-5"
        >
          Create post
        </Typography>
        <TextField
          required
          fullWidth
          id="title"
          label="Title"
          helperText={errors.title ? errors.title.message : ""}
          error={errors.title ? true : false}
          {...register("title")}
          sx={{ marginBottom: errors.title ? "2px" : "25px" }}
        />
        <TextField
          required
          fullWidth
          multiline
          rows={4}
          id="description"
          label="Description"
          helperText={errors.description ? errors.description.message : ""}
          error={errors.description ? true : false}
          {...register("description")}
          sx={{ marginBottom: errors.description ? "2px" : "25px" }}
        />
        <Box className={selectedFile ? "flex" : "flex mb-5"}>
          <Button variant="contained" component="label">
            Upload File
            <input
              accept="image/*"
              type="file"
              id="file"
              hidden
              onChange={onSelectFile}
            />
          </Button>
          {selectedFile && (
            <Box className="mx-5">
              <Button
                variant="contained"
                color="error"
                type="button"
                onClick={() => setSelectedFile(undefined)}
              >
                clear image
              </Button>
            </Box>
          )}
        </Box>
        {selectedFile && <img src={preview} className="py-5" />}
        <Box className="flex justify-end">
          <Box className="mx-5">
            <Button variant="contained" color="error">
              Back
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default PostForm;
