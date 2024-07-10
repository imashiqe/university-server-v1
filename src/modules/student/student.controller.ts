<<<<<<< HEAD
import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';

import { StudentService } from './student.service'; // Add this line to import the 'studentService'

const getSingleStudent: RequestHandler = async (
=======
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import { StudentService } from './student.service';

const getSingleStudent = async (
>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

<<<<<<< HEAD
const getAllStudents: RequestHandler = async (
=======
const getAllStudents = async (
>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
<<<<<<< HEAD
      message: 'Student are retrieved Succesfully',
=======
      message: 'Student are retrieved succesfully',
>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

<<<<<<< HEAD
const deleteStudent: RequestHandler = async (
=======
const deleteStudent = async (
>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
