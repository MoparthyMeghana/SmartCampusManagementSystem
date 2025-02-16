import mongoose from "mongoose";
import validator from "validator";

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sem: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
});


export const Assignments = mongoose.model('Assignments', assignmentSchema);
