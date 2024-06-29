import express from 'express';
import studentController from './student.controller';

const router = express.Router();

// will  call the controller function
router.post('/create-student', studentController.createStudent);

router.get('/', studentController.getAllStudent);
router.get('/:studentid', studentController.getSingleStudent);

export const StudentRoutes = router;
