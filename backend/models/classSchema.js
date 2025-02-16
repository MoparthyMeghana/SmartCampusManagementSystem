import mongoose from "mongoose";
import validator from "validator";

const classSchema = new mongoose.Schema({
    sem: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
});


export const Classes = mongoose.model('Classes', classSchema);
