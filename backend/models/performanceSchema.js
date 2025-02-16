import mongoose from "mongoose";
import validator from "validator";

const performanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    sem: {
        type: String,
        required: true
    },
});


export const Performance = mongoose.model('Performance', performanceSchema);
