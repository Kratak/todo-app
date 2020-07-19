export enum ECategoryColors {
  red = "#ff0000",
  green = "#00ff00",
  blue = "#0000ff",
}

export interface ITodoItem {
  id: string;
  title: string;
  status: boolean;
  categoryId: string;
  assigneeId: string;
}

export interface ITodoCategory {
  id: string;
  color: ECategoryColors;
  name: string;
}

export interface IAssignee {
  id: string;
  name: string;
  email: string;
}
