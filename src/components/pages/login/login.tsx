import React from "react";
import PaperBase from "@material-ui/core/Paper";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";

const { media, colors, compoundStyles } = stylesConstans;

const Paper = styled(PaperBase)`
  && {
    align-self: center;
    width: 90vw;
    min-height: 200px;
    transform: translateX(-50%);
    position: absolute;
    top: 80px;
    left: 50%;
    background-color: ${colors.modalBackground};
    border: ${compoundStyles.border};

    ${media.tabletOnly} {
      width: 400px;
    }

    ${media.desktopOnly} {
      width: 300px;
    }
  }
`;

export const Login = () => <Paper>Login</Paper>;
