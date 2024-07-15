import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
