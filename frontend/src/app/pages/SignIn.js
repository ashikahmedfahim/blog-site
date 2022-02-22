import React from "react";
import SignInForm from "../components/SignInForm";
import { Container } from "@mui/material";
import { signIn } from "../redux/actions/AuthActions";
import { removeSuccess, removeError } from "../redux/actions/HelperActions";
import { useSelector, useDispatch } from "react-redux";
import SnackBar from "../components/SnackBar";

const SignIn = () => {
  const dispatch = useDispatch();

  const { hasSuccess, hasError, message } = useSelector(
    (state) => state.helperStore
  );

  const handleSignIn = (formData) => {
    dispatch(signIn(formData));
  };

  const handleCloseSuccessSnackBar = () => {
    dispatch(removeSuccess());
  };

  const handleCloseErrorSnackBar = () => {
    dispatch(removeError());
  };

  return (
    <Container maxWidth="xl">
      <div className="flex justify-center align-middle">
        <div className="lg:w-1/3 md:w-1/2">
          <SignInForm handleSignIn={handleSignIn} />
          {hasSuccess && (
            <SnackBar
              severity={"success"}
              message={message}
              onClose={handleCloseSuccessSnackBar}
            />
          )}
          {hasError && (
            <SnackBar
              severity={"error"}
              message={message}
              onClose={handleCloseErrorSnackBar}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
