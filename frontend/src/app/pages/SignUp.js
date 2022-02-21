import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Container } from "@mui/material";

const SignUp = () => {
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <SignUpForm />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
