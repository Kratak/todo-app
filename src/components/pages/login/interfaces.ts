export enum EFormStateFieldsKeys {
  Login = "login",
  Password = "password",
}

export type IFormState = {
  [key in EFormStateFieldsKeys]: string;
};

export type TErrorCode = "toShort" | "empty" | "wrongEntry" | null;

export interface IFormValidation {
  validate: boolean;
  [EFormStateFieldsKeys.Login]: TErrorCode;
  [EFormStateFieldsKeys.Password]: TErrorCode;
}
