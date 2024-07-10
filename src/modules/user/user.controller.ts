import httpStatus from 'http-status';
<<<<<<< HEAD

import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../app/utils/sendResponse';

=======

import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../app/utils/sendResponse';
import { UserServices } from './user.service';

>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);
<<<<<<< HEAD

    const result = await UserService.createStudentIntoDB(password, studentData);

=======

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
