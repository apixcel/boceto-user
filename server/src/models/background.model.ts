import mongoose from "mongoose";

const BackgroundSchema = new mongoose.Schema({
  type: { type: String, enum: ["image", "color"], required: true },
  image: { type: String },
  color: { type: String },
},
{
  timestamps: true,
});

const Background = mongoose.model("Background", BackgroundSchema);
export default Background;
