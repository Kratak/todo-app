import ButtonBase, { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";

const { colors, compoundStyles } = stylesConstans;

export const LogoutButton = styled(ButtonBase).attrs<ButtonProps>((props) => ({
  variant: props.variant || "contained",
}))`
  && {
    text-transform: unset;
    width: 150px;
    font-weight: 700;
    font-size: 18px;
    color: ${colors.white};
    background-color: ${colors.green};
    border: solid ${colors.white} 2px;
    border-radius: ${compoundStyles.borderRadius};
    &:hover {
      background-color: ${colors.green}99;
    }
  }
`;
