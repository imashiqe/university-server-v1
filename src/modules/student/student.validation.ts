import * as z from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name is required' })
    .max(20, {
      message: 'First Name should not be more than 20 characters',
    })
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message: 'First Name should be in capitalize format',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name is required' })
    .regex(/^[A-Za-z]+$/, {
      message: 'Last Name should contain only letters',
    }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact Number is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact Number is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1).max(50),
  occupation: z.string().min(1).max(50),
  contactNumber: z.string().min(1).max(20),
  address: z.string().min(1),
});

const studentValidationSchema = z.object({
  id: z.string().min(1).optional(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().min(1, { message: 'Date of Birth is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .min(1, { message: 'Email is required' }),
  contactNumber: z.string().min(1, { message: 'Contact Number is required' }),
  emergencyContact: z
    .string()
    .min(1, { message: 'Emergency Contact is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present Address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent Address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'inactive']).optional(),
});
export default studentValidationSchema;
