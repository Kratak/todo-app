import PaperBase from "@material-ui/core/Paper";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";

const { media, colors, compoundStyles } = stylesConstans;

export const Paper = styled(PaperBase)`
  && {
    box-sizing: border-box;
    padding: 20px;
    align-self: center;
    width: 100vw;
    height: 100vh;
    min-height: 300px;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    background-color: ${colors.modalBackground};

    ${media.tabletOnly} {
      top: 5vw;
      width: 90vw;
      height: unset;
      border-radius: 4px;
      border: ${compoundStyles.border};
      margin-bottom: 5vw;
    }

    ${media.desktopOnly} {
      padding: 30px 40px;
      width: 1000px;
      height: unset;
      border-radius: 4px;
      border: ${compoundStyles.border};
      margin-bottom: 5vw;
    }
  }
`;
