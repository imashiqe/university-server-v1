import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All Students fetched successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: ' Students fetched successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAllStudent,
  getSingleStudent,
};
