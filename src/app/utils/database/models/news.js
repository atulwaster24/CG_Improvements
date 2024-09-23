import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    published_On: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        required: true,
    }
}); 

export default mongoose.models.New || mongoose.model("New", newsSchema);