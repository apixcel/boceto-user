import { z } from "zod";

const create = z.object({
  month: z.string().min(1, { message: "Month is required" }),
  paymentDeadline: z.date(),
  amount: z.number().min(0, { message: "Amount must be a positive number" }),
  observations: z.string().optional(),
  status: z.string().min(1, { message: "Status is required" }),
  thirdPartyCard: z.boolean().optional(),
});

const billingValidationSchema = {
  create,
};
export default billingValidationSchema;
