export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin" | "player";
  password: string;
  image?: string;
  passwordResetToken?: string;
  passwordResetExpiry?: Date;
  isActive?: boolean;
  isVerified?: boolean;
  createdAt: string;
  updatedAt: string;
}
