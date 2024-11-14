import mongoose from "mongoose";

const CasinoInfoSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    limit: { type: Number, required: true },
    amount: { type: Number, required: true },
    observaciones: { type: String },
    status: { type: String, required: true },
    thirdPartyCard: { type: Boolean },
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

const CasinoInfo = mongoose.model("CasinoInfo", CasinoInfoSchema);
export default CasinoInfo;
