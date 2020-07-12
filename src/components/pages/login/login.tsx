import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

import { staticRoutes } from "logics/router";
import { ELoginMessagesKeys, ENamesSpaces } from "resources/translation/keys";

import { Paper, TextField, GridItem, LoginButton } from "./styled";

interface ILoginProps extends RouteComponentProps {}

export const Login = (props: ILoginProps) => {
  const { t } = useTranslation(ENamesSpaces.LoginMessage);

  const isValid = true;
  const errorMessage = "Incorrect entry.";
  const helperText = "*Field Required";
  const loginLabel = "Login";
  const passwordLabel = "Password";

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
          <LoginButton onClick={onLoginSubmit}>
            {t(ELoginMessagesKeys.LoginButton)}
          </LoginButton>
        </GridItem>
      </Grid>
    </Paper>
  );
};
