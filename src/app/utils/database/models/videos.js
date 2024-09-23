import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  videoID: {
    type: String,
    required: true,
    unique: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Video || mongoose.model("Video", videosSchema);
