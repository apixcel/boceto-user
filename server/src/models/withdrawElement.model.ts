import mongoose from "mongoose";

const withdrawButtonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
  color: { type: String, required: true },
});

const WithdrawEelementSchema = new mongoose.Schema(
  {
    button: withdrawButtonSchema,
    facts: { type: String, required: true },
    casino: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Casino",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WithdrawElement = mongoose.model(
  "WithdrawEelement",
  WithdrawEelementSchema
);
export default WithdrawElement;
