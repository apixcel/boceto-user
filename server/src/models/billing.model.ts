import mongoose from "mongoose";

const BillingSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    paymentDeadline: { type: Date, required: true },
    amount: { type: Number, required: true },
    observations: { type: String },
    status: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    casino: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Casino",
      required: true,
    },
    thirdPartyCard: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Billing = mongoose.model("Billing", BillingSchema);
export default Billing;
