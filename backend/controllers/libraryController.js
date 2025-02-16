import { Books } from "../models/librarySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createBook = async (req, res, next) => {
    console.log(req.body);
    const {title, author} = req.body;

    try{
        if (!title || !author ) {
            handleValidationError("Please Fill Full Form", 400);
        }
        await Books.create({title, author});
        res.status(200).json({
            success: true,
            message: "Book Created!",
        })
    } catch(err){
        next(err)
    }
};

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Books.find();
        res.status(200).json({
            success: true,
            books,
        })
    } catch (error) {
        next(err)
    }
}