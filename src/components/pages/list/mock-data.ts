import { baseLogin } from "staticLogin";

import {
  ECategoryColors,
  IAssignee,
  ITodoCategory,
  ITodoItem,
} from "./interfaces";

export const todoItems: ITodoItem[] = [
  {
    assigneeId: baseLogin,
    categoryId: ECategoryColors.blue,
    id: "1",
    status: true,
    title: "1st todo",
  },
  {
    assigneeId: baseLogin,
    categoryId: ECategoryColors.red,
    id: "2",
    status: false,
    title: "2nd todo",
  },
  {
    assigneeId: baseLogin,
    categoryId: ECategoryColors.green,
    id: "3",
    status: false,
    title: "3nd todo",
  },
];

export const assignees: IAssignee[] = [
  {
    email: baseLogin + "@gmail.com",
    id: baseLogin,
    name: baseLogin,
  },
];

export const categories: ITodoCategory[] = [
  {
    color: ECategoryColors.blue,
    id: ECategoryColors.blue,
    name: "Official",
  },
  {
    color: ECategoryColors.red,
    id: ECategoryColors.red,
    name: "Important",
  },
  {
    color: ECategoryColors.green,
    id: ECategoryColors.green,
    name: "Personal",
  },
];
