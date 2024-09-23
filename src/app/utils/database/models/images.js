import { Schema, model, models } from "mongoose";

const imagesSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export default models.Image || model("Image", imagesSchema);
