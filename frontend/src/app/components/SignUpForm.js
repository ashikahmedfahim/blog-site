import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AlertDialog from "./AlertDialog";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUpForm = () => {
  const SignUpschema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpschema),
  });

  const handleFormSubmit = (formData) => {
    console.log(formData);
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
          Sign Up
        </Typography>
        <TextField
          required
          fullWidth
          id="firstName"
          label="First Name"
          helperText={errors.firstName ? errors.firstName.message : ""}
          error={errors.firstName ? true : false}
          {...register("firstName")}
          sx={{ marginBottom: errors.firstName ? "2px" : "25px" }}
        />
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          helperText={errors.lastName ? errors.lastName.message : ""}
          error={errors.lastName ? true : false}
          {...register("lastName")}
          sx={{ marginBottom: errors.lastName ? "2px" : "25px" }}
        />
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
        <TextField
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ""
          }
          error={errors.confirmPassword ? true : false}
          {...register("confirmPassword")}
          sx={{ marginBottom: errors.confirmPassword ? "2px" : "25px" }}
        />
        <Box className="flex justify-end">
          <Box className="mx-5">
            <Button variant="contained" color="error">
              Back
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>
      {/* <AlertDialog /> */}
    </Box>
  );
};

export default SignUpForm;
