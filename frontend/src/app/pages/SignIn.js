import React from "react";
import SignInForm from "../components/SignInForm";
import { Container } from "@mui/material";
import { signIn } from "../redux/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSignIn = (formData) => {
    dispatch(signIn(formData));
  };

  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <SignInForm handleSignIn={handleSignIn} />
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
