import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }, 
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.models.Work || mongoose.model("Work", workSchema);