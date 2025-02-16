import { Facultys } from "../models/FacultySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createFaculty = async (req, res, next) => {
    console.log(req.body);
    const {name, email, sem} = req.body;

    try{
        if (!name || !email || !sem) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Facultys.create({name, email, sem});
        res.status(200).json({
            success: true,
            message: "Faculty Created!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllFaculty = async (req, res, next) => {
    try {
        const faculty = await Facultys.find();
        res.status(200).json({
            success: true,
            faculty,
        })
    } catch (error) {
        next(err)
    }
}