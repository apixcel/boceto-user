import { IUser } from "./user";

export interface ICasaino {
  name: string;
  dueDate: string;
  status: "pending" | "active" | "closed";
  owner?: IUser;
  createdAt: string;
  updatedAt: string;
}
