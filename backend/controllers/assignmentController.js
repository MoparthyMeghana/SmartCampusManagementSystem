import { Assignments } from "../models/assignmentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createAssignment = async (req, res, next) => {
    console.log(req.body);
    const {title, description, sem, deadline} = req.body;

    try{
        if (!title || !description || !sem || !deadline) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Assignments.create({title, description, sem, deadline});
        res.status(200).json({
            success: true,
            message: "Assignment is Created!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignments.find();
        res.status(200).json({
            success: true,
            assignments,
        })
    } catch (error) {
        next(err)
    }
}