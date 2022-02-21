import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignInForm = (props) => {
  const SignUpschema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpschema),
  });

  const handleFormSubmit = (formData) => {
    props.handleSignIn(formData);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Paper elevation={3} className="p-10 my-10">
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          className="text-center"
        >
          Sign In
        </Typography>
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          helperText={errors.email ? errors.email.message : ""}
          error={errors.email ? true : false}
          {...register("email")}
          sx={{ marginBottom: errors.email ? "2px" : "25px" }}
        />
        <TextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          helperText={errors.password ? errors.password.message : ""}
          error={errors.password ? true : false}
          {...register("password")}
          sx={{ marginBottom: errors.password ? "2px" : "25px" }}
        />
        <Box className="flex justify-end">
          <Box className="mx-5">
            <Button variant="contained" color="error">
              Back
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignInForm;
