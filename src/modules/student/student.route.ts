import express from 'express';
import studentController from './student.controller';

const router = express.Router();

// will  call the controller function

router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);

export const StudentRoutes = router;
