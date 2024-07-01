import { Request, Response } from 'express';
import { StudentService } from './student.service';

import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using zod
    // validating the schema
    const { student: studentData } = req.body;
    const zodiacsData = studentValidationSchema.parse(studentData);

    // will call service func to send this data
    const result = await StudentService.createStudentIntoDB(zodiacsData);
    // send response

    res.status(200).json({
      success: true,
      message: 'Student  created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: err,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All Students fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: ' Students fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
