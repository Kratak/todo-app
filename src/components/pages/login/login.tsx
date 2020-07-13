import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

import { staticRoutes } from "logics/router";
import {
  loginMessagesKeys as keys,
  ENamesSpaces,
} from "resources/translation/keys";

import { Paper, TextField, GridItem, LoginButton } from "./styled";

interface ILoginProps extends RouteComponentProps {}

export const Login = (props: ILoginProps) => {
  const { t: translation } = useTranslation(ENamesSpaces.LoginMessage);

  const isValid = true;

  const loginHelperTextMessage = isValid
    ? "*" + translation(keys.info_messages.field_required)
    : translation(keys.alerts.unknown_login);

  const passwordHelperTextMessage = isValid
    ? "*" + translation(keys.info_messages.field_required)
    : translation(keys.alerts.unknown_login);

  const onLoginSubmit = () => {
    props.history.push(staticRoutes.list);
  };

  return (
    <Paper>
      <Grid container>
        <GridItem>
          <TextField
            error={!isValid}
            label={translation(keys.labels.login)}
            helperText={loginHelperTextMessage}
          />
        </GridItem>
        <GridItem>
          <TextField
            error={!isValid}
            label={translation(keys.labels.password)}
            helperText={passwordHelperTextMessage}
            $lastOfType
          />
        </GridItem>
        <GridItem>
          <LoginButton onClick={onLoginSubmit}>
            {translation(keys.login_button)}
          </LoginButton>
        </GridItem>
      </Grid>
    </Paper>
  );
};
