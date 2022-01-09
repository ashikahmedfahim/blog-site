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
    <Box
      component="form"
      // sx={{
      //   "& .MuiTextField-root": { m: 1, width: "50ch" },
      // }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} sx={{ padding: "2rem 1rem" }}>
        <TextField
          required
          id="outlined-required"
          label="Task Name"
          helperText="Incorrect entry."
          error
        />
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
      </Paper>
      <AlertDialog />
    </Box>
  );
};

export default Form;
