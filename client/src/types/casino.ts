import { IUser } from "./user";

export interface ICasaino {
  name: string;
  dueDate: string;
  status: string;
  owner?: IUser;
}
