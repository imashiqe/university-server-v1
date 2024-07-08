import { Request, Response } from 'express';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using zod
    // validating the schema
    const { password, student: studentData } = req.body;
    // const zodiacsData = studentValidationSchema.parse(studentData);

    // will call service func to send this data
    const result = await UserService.createStudentIntoDB(password, studentData);
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

export const userController = {
  createStudent,
};
