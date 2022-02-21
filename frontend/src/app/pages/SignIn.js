import React from "react";
import SignInForm from "../components/SignInForm";
import { Container } from "@mui/material";

const SignIn = () => {
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <SignInForm />
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
