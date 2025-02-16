import express from 'express';
import { createFaculty, getAllFaculty } from '../controllers/facultyController.js';

const router = express.Router();


router.get('/getall', getAllFaculty);
router.post('/', createFaculty);

export default router;
