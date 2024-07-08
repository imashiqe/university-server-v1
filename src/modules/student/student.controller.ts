import { Request, Response } from 'express';
import { StudentService } from './student.service';

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
  getAllStudent,
  getSingleStudent,
};
