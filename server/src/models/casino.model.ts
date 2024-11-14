import mongoose from "mongoose";

const CasinoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "active", "closed"],
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Casino = mongoose.model("Casino", CasinoSchema);
export default Casino;
