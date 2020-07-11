import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { Paper, TextField, GridItem } from "./styled";

export const Login = () => {
  const isValid = true;
  const errorMessage = "Incorrect entry.";
  const helperText = "*Field Required";
  const loginLabel = "Login";
  const passwordLabel = "Password";
  const loginText = "Login";

  const helperTextMessage = isValid ? helperText : errorMessage;

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
          <Button variant={"contained"}>{loginText}</Button>
        </GridItem>
      </Grid>
    </Paper>
  );
};
