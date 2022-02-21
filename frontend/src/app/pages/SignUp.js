import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Container } from "@mui/material";
import { signUp } from "../redux/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUp = (formData) => {
    dispatch(signUp(formData));
  };

  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <SignUpForm handleSignUp={handleSignUp} />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
