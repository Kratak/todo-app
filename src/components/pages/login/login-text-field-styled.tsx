import TextFieldBase from "@material-ui/core/TextField";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";
import { StandardTextFieldProps } from "@material-ui/core/TextField/TextField";

const { media, colors, compoundStyles } = stylesConstans;

interface ICustomTextFieldProps {
  lastOfType?: boolean;
}

type TExtendedTextFieldProps = StandardTextFieldProps & ICustomTextFieldProps;

export const LoginTexField = styled(TextFieldBase).attrs<
  TExtendedTextFieldProps
>((props) => ({
  variant: props.variant || "outlined",
  defaultValue: props?.defaultValue || " ",
}))<TExtendedTextFieldProps>`
  && {
    width: 100%;
    background-color: ${colors.inputBackground};
    margin: 15px 0;
    border-radius: ${compoundStyles.borderRadius};
    ${(props) => props.lastOfType && "margin-bottom: 30px;"}

    input {
      border: ${compoundStyles.border};
      border-radius: 10px;
    }

    label {
      color: ${colors.commonText};
      border: none;
      top: -10px;
      font-size: 18px;
    }

    fieldset {
      display: none;
    }

    p {
      font-weight: 500;
      font-size: 12px;
    }

    ${media.tabletOnly} {
      width: 200px;
    }

    ${media.desktopOnly} {
      width: 200px;
    }
  }
`;
