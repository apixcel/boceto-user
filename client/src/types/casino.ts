import { IUser } from "./user";

export interface ICasaino {
  _id: string;
  name: string;
  dueDate: string;
  status: "pending" | "active" | "closed";
  owner?: IUser;
  createdAt: string;
  updatedAt: string;
}
