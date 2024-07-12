import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant';

const TacademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Month,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    endMonth: {
      type: String,
      enum: Month,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  TacademicSemesterSchema
);
