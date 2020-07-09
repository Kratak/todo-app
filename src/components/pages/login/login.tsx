import React from "react";
import { LoginPaper } from "./login-paper-styled";
import { LoginTexField } from "./login-text-field-styled";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export const Login = () => {
  const isValid = true;
  const errorMessage = "Incorrect entry.";
  const helperText = "*Field Required";
  const loginLabel = "Login";
  const passwordLabel = "Password";

  const helperTextMessage = isValid ? helperText : errorMessage;

  return (
    <LoginPaper>
      <LoginTexField
        error={!isValid}
        label={loginLabel}
        helperText={helperTextMessage}
      />
      <LoginTexField
        error={!isValid}
        label={passwordLabel}
        helperText={helperTextMessage}
        lastOfType
      />
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant={"contained"}>Login</Button>
        </Grid>
      </Grid>
    </LoginPaper>
  );
};
