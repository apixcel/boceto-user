import { z } from "zod";

const withdrawButtonSchema = z.object({
  text: z.string().min(1, { message: "Button text is required" }),
  link: z.string().url({ message: "Button link must be a valid URL" }),
  color: z.string().min(1, { message: "Button color is required" }),
});

const create = z.object({
  button: withdrawButtonSchema,
  facts: z.string().min(1, { message: "Facts are required" }),
});

const WithdrawEelementValidationSchema = {
  create,
};
export default WithdrawEelementValidationSchema;
