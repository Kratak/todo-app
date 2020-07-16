import React, { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

import { baseLogin, basePassword } from "staticLogin";
import { staticRoutes } from "logics/router";

import {
  loginMessagesKeys as keys,
  ENamesSpaces,
} from "resources/translation/keys";

import {
  EFormStateFieldsKeys,
  IFormState,
  IFormValidation,
  TErrorCode,
} from "./interfaces";
import { Paper, TextField, GridItem, LoginButton } from "./styled";

interface ILoginProps extends RouteComponentProps {}

const initialFormState: IFormState = {
  login: "",
  password: "",
};

const initialFormValidation: IFormValidation = {
  validate: false,
  login: "empty",
  password: "empty",
};

export const Login = (props: ILoginProps) => {
  const { t: translation } = useTranslation(ENamesSpaces.LoginMessage);
  const [form, setForm] = useState<IFormState>(initialFormState);
  const [formValidation, setFormValidation] = useState<IFormValidation>(
    initialFormValidation,
  );

  const handleSubmit = () => {
    const loginIsValid = form.login === baseLogin;
    const passwordIsValid = form.password === basePassword;

    if (loginIsValid && passwordIsValid) {
      props.history.push(staticRoutes.list);
      return;
    }

    let loginError: TErrorCode = formValidation.login;
    let passwordError: TErrorCode = formValidation.password;

    if (!loginIsValid && !formValidation.login) {
      loginError = "wrongEntry";
    }

    if (!passwordIsValid && !formValidation.password) {
      passwordError = "wrongEntry";
    }

    setFormValidation({
      login: loginError,
      password: passwordError,
      validate: true,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name as EFormStateFieldsKeys;
    const targetValue = event.target.value;
    let errorCode = formValidation[targetName];

    if (targetValue.length < 6) {
      errorCode = "toShort";
      if (targetValue.length === 0) {
        errorCode = "empty";
      }
    } else {
      errorCode = null;
    }

    setForm({ ...form, [targetName]: targetValue });
    setFormValidation({ ...formValidation, [targetName]: errorCode });
  };

  const getHelperText = (type: EFormStateFieldsKeys) => {
    if (!formValidation.validate) {
      return translation(keys.info_messages.field_required);
    }

    const wrongEntry: IFormState = {
      login: "unknown_login",
      password: "wrong_password",
    };

    switch (formValidation[type]) {
      case "empty":
        return translation(keys.alerts.empty_field);

      case "toShort":
        return translation(keys.alerts.minimum_charts);

      case "wrongEntry":
        return translation(
          keys.alerts[wrongEntry[type] as "unknown_login" | "wrong_password"],
        );

      default:
        return "";
    }
  };

  const loginHelperText = getHelperText(EFormStateFieldsKeys.Login);
  const passwordHelperText = getHelperText(EFormStateFieldsKeys.Password);

  return (
    <Paper>
      <Grid container>
        <GridItem>
          <TextField
            name={EFormStateFieldsKeys.Login}
            error={formValidation.validate}
            helperText={loginHelperText}
            label={translation(keys.labels.login)}
            onChange={handleChange}
            value={form.login}
          />
        </GridItem>
        <GridItem>
          <TextField
            $lastOfType
            name={EFormStateFieldsKeys.Password}
            error={formValidation.validate}
            helperText={passwordHelperText}
            label={translation(keys.labels.password)}
            onChange={handleChange}
            type={"password"}
            value={form.password}
          />
        </GridItem>
        <GridItem>
          <LoginButton onClick={handleSubmit}>
            {translation(keys.login_button)}
          </LoginButton>
        </GridItem>
      </Grid>
    </Paper>
  );
};
