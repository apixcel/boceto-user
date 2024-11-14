import { z } from "zod";

const create = z.object({
  bank: z.string().min(1, { message: "Bank is required" }),
  accountHolderName: z
    .string()
    .min(1, { message: "Account holder name is required" }),
  cbu: z
    .string()
    .length(22, { message: "CBU must be exactly 22 digits" })
    .regex(/^\d+$/, { message: "CBU must contain only digits" }),
  alias: z.string().max(20, { message: "Alias must be at most 20 characters" }),
  // .optional(),
});
const update = z
  .object({
    bank: z.string().min(1, { message: "Bank is required" }).optional(),
    accountHolderName: z
      .string()
      .min(1, { message: "Account holder name is required" })
      .optional(),
    cbu: z
      .string()
      .length(22, { message: "CBU must be exactly 22 digits" })
      .regex(/^\d+$/, { message: "CBU must contain only digits" })
      .optional(),
    alias: z
      .string()
      .max(20, { message: "Alias must be at most 20 characters" })
      .optional(),
  })
  .partial();

const bankAccountValidationSchema = {
  create,
  update,
};

export default bankAccountValidationSchema;
