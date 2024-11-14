import { z } from "zod";

const create = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  status: z.enum(["pending", "active", "closed"], {
    message: "Status must be one of 'pending', 'active', or 'closed'",
  }),
});

const casinoValidationSchema = {
  create,
};
export default casinoValidationSchema;
