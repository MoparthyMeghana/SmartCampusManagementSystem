import mongoose from "mongoose";
import validator from "validator";

const librarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});


export const Books = mongoose.model('Books', librarySchema);
