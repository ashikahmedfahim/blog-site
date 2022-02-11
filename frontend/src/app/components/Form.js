import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AlertDialog from "./AlertDialog";

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [open]);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Paper elevation={3} className="p-10 my-10">
        <TextField
          required
          fullWidth
          id="firstName"
          label="First Name"
          helperText="Incorrect entry."
          error
        />
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          helperText="Incorrect entry."
          error
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          helperText="Incorrect entry."
          error
        />
        <TextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          helperText="Incorrect entry."
          error
        />
        <TextField
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          helperText="Incorrect entry."
          error
        />
        <Box className="py-5 flex justify-end">
          <Box className="mx-5">
            <Button variant="contained" color="error">
              Back
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Box>
        </Box>
      </Paper>
      <AlertDialog />
    </Box>
  );
};

export default Form;
