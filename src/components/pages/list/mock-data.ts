import { baseLogin } from "staticLogin";
import { generateUuid } from "logics/helpers";

import {
  ECategoryColors,
  IAssignee,
  ITodoCategory,
  ITodoItem,
} from "./interfaces";

const baseUserUUID = generateUuid();
const officialUUID = generateUuid();
const importantUUID = generateUuid();
const personalUUID = generateUuid();

export const todoItems: ITodoItem[] = [
  {
    assigneeId: baseUserUUID,
    categoryId: officialUUID,
    id: generateUuid(),
    status: true,
    title: "1st todo",
  },
  {
    assigneeId: baseUserUUID,
    categoryId: importantUUID,
    id: generateUuid(),
    status: false,
    title: "2nd todo",
  },
  {
    assigneeId: baseUserUUID,
    categoryId: personalUUID,
    id: generateUuid(),
    status: false,
    title: "3nd todo",
  },
];

export const assignees: IAssignee[] = [
  {
    email: baseLogin + "@gmail.com",
    id: baseUserUUID,
    name: baseLogin,
  },
];

export const categories: ITodoCategory[] = [
  {
    color: ECategoryColors.blue,
    id: officialUUID,
    name: "Official",
  },
  {
    color: ECategoryColors.red,
    id: importantUUID,
    name: "Important",
  },
  {
    color: ECategoryColors.green,
    id: personalUUID,
    name: "Personal",
  },
];
