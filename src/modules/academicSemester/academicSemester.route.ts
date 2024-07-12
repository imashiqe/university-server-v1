import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.academicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester
);

export const AcademicSemesterRoute = router;
