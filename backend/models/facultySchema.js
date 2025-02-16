import mongoose from "mongoose";
import validator from "validator";

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sem: {
        type: String,
        required: true
    },
});


export const Facultys = mongoose.model('Facultys', facultySchema);
