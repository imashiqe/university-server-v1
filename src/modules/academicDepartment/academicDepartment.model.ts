import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema
);
