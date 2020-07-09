import PaperBase from "@material-ui/core/Paper";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";

const { media, colors, compoundStyles } = stylesConstans;

export const LoginPaper = styled(PaperBase)`
  && {
    box-sizing: border-box;
    padding: 20px;
    align-self: center;
    width: 90vw;
    min-height: 300px;
    transform: translateX(-50%);
    position: absolute;
    top: 80px;
    left: 50%;
    background-color: ${colors.modalBackground};
    border: ${compoundStyles.border};
    border-radius: ${compoundStyles.borderRadius};

    ${media.tabletOnly} {
      width: 400px;
    }

    ${media.desktopOnly} {
      width: 300px;
    }
  }
`;
