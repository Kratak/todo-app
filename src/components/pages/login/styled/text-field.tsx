import TextFieldBase from "@material-ui/core/TextField";
import styled from "styled-components";

import { stylesConstans } from "components/shared/utils";
import { StandardTextFieldProps } from "@material-ui/core/TextField/TextField";

const { media, colors, compoundStyles } = stylesConstans;

interface ICustomTextFieldProps extends StandardTextFieldProps {
  $lastOfType?: boolean;
}
export const TextField = styled(TextFieldBase).attrs<ICustomTextFieldProps>(
  (props) => ({
    variant: props.variant || "outlined",
    defaultValue: props?.defaultValue || " ",
  }),
)<ICustomTextFieldProps>`
  && {
    width: 90%;
    background-color: ${colors.inputBackground};
    margin: 15px 0;
    border-radius: ${compoundStyles.borderRadius};
    ${(props) => props.$lastOfType && "margin-bottom: 30px;"}

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
      width: 300px;
    }

    ${media.desktopOnly} {
      width: 300px;
    }
  }
`;
