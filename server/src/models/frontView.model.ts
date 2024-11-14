import mongoose from "mongoose";

const FrontViewSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    primaryBannerImg: [{ type: String }],
    secondaryBannerImg: [{ type: String }],
    topButton: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TopButton",
      require: true,
    },
    background: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Background",
      require: true,
    },
    whatsappStatus: { type: Boolean, default: false },
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

const FrontView = mongoose.model("FrontView", FrontViewSchema);
export default FrontView;
