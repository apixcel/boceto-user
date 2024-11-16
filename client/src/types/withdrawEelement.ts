export interface IWithdrawButton {
  text: string;
  link: string;
  color: string;
}

export interface IWithdrawElement {
  button: IWithdrawButton;
  facts: string;
  casino: string;
  createdAt?: Date;
  updatedAt?: Date;
}
