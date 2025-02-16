import { Classes } from "../models/classSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createClass = async (req, res, next) => {
    console.log(req.body);
    const { sem, subject } = req.body;

    try{
        if ( !sem || !subject ) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Classes.create({ sem, subject });
        res.status(200).json({
            success: true,
            message: "Class is Created!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Classes.find();
        res.status(200).json({
            success: true,
            classes,
        })
    } catch (error) {
        next(err)
    }
}