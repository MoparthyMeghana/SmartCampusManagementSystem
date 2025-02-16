import { Announcements } from "../models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createAnnouncement = async (req, res, next) => {
    console.log(req.body);
    const {announcement} = req.body;

    try{
        if (!announcement) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Announcements.create({announcement});
        res.status(200).json({
            success: true,
            message: "Announcement Created!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllAnnouncements = async (req, res, next) => {
    try {
        const announcements = await Announcements.find();
        res.status(200).json({
            success: true,
            announcements,
        })
    } catch (error) {
        next(err)
    }
}