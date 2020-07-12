import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { staticRoutes } from "logics/router";

import { Paper, TextField, GridItem, LoginButton } from "./styled";

interface ILoginProps extends RouteComponentProps {}

export const Login = (props: ILoginProps) => {
  const isValid = true;
  const errorMessage = "Incorrect entry.";
  const helperText = "*Field Required";
  const loginLabel = "Login";
  const passwordLabel = "Password";
  const loginText = "Sign in";

  const helperTextMessage = isValid ? helperText : errorMessage;

  const onLoginSubmit = () => {
    props.history.push(staticRoutes.list);
  };

  return (
    <Paper>
      <Grid container>
        <GridItem>
          <TextField
            error={!isValid}
            label={loginLabel}
            helperText={helperTextMessage}
          />
        </GridItem>
        <GridItem>
          <TextField
            error={!isValid}
            label={passwordLabel}
            helperText={helperTextMessage}
            $lastOfType
          />
        </GridItem>
        <GridItem>
          <LoginButton onClick={onLoginSubmit}>{loginText}</LoginButton>
        </GridItem>
      </Grid>
    </Paper>
  );
};
