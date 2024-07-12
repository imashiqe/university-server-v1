import { z } from 'zod';

const academicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum(['Autumn',  'Summer', 'Fall'])
    })
});

export const AcademicSemesterValidation = {
  academicSemesterValidationSchema,
};
