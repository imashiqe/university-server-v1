import express from 'express';
import StudentControllers from './student.controller';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.get('/', StudentControllers.getAllStudent);

export const StudentRoutes = router;
