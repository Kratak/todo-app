import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { staticRoutes } from "logics/router";

import { Paper, TextField, GridItem } from "./styled";

interface ILoginProps extends RouteComponentProps {}

export const Login = (props: ILoginProps) => {
  const isValid = true;
  const errorMessage = "Incorrect entry.";
  const helperText = "*Field Required";
  const loginLabel = "Login";
  const passwordLabel = "Password";
  const loginText = "Login";

  const helperTextMessage = isValid ? helperText : errorMessage;

  const onLogin = () => {
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
          <Button variant={"contained"} onClick={onLogin}>
            {loginText}
          </Button>
        </GridItem>
      </Grid>
    </Paper>
  );
};
