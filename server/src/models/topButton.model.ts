import mongoose from "mongoose";

const TopButtonSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    link: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const TopButton = mongoose.model("TopButton", TopButtonSchema);
export default TopButton;
