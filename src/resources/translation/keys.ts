import { ELoginMessagesKeys, ENamesSpaces } from "./keys/";

export type ILoginMessages = { [key in ELoginMessagesKeys]: string };

export interface ITranslations {
  [ENamesSpaces.LoginMessage]: ILoginMessages;
}

export { ELoginMessagesKeys, ENamesSpaces };
