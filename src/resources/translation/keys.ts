import { ENamesSpaces, loginMessagesKeys, ILoginMessages } from "./keys/";

export interface ITranslations {
  [ENamesSpaces.LoginMessage]: ILoginMessages;
}

export { ENamesSpaces, loginMessagesKeys };
