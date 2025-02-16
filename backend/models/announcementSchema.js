import mongoose from "mongoose";
import validator from "validator";

const announcementSchema = new mongoose.Schema({
    announcement: {
        type: String,
        required: true
    },
});


export const Announcements = mongoose.model('Announcements', announcementSchema);
