import httpStatus from 'http-status';

import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../app/utils/sendResponse';

const createAcademicSemester = async (req: Request, res: Response) => {
  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
};

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
