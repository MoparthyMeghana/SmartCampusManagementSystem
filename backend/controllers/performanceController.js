import { Performance } from "../models/performanceSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createPerformance = async (req, res, next) => {
    console.log(req.body);
    const {name, registrationNumber, sem} = req.body;

    try{
        if (!name || !registrationNumber || !sem) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Performance.create({name, registrationNumber, sem});
        res.status(200).json({
            success: true,
            message: "Performance Updated!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllPerformance = async (req, res, next) => {
    try {
        const performance = await Performance.find();
        res.status(200).json({
            success: true,
            performance,
        })
    } catch (error) {
        next(err)
    }
}