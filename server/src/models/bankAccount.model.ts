import mongoose from "mongoose";

const BankAccountSchema = new mongoose.Schema(
  {
    instruction1: { type: String, required: false },
    accountHolderName: { type: String, required: true },
    bank: { type: String, required: true },
    cbu: { type: String, required: true },
    alias: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    instruction2: { type: String, required: false },
    dynamicFields: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const BankAccount = mongoose.model("BankAccount", BankAccountSchema);
export default BankAccount;
