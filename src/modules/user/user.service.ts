import config from '../../app/config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, StudentData: TStudent) => {
  //create user object
  const userData: Partial<TUser> = {};

  // if password is not given  , use the default password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  //set manually generated id
  userData.id = '2030100001';

  //   create a user
  const NewUser = await User.create(userData);
  // create a student
  if (Object.keys(NewUser).length) {
    // set id, _id as user
    StudentData.id = NewUser.id;
    StudentData.user = NewUser._id; //reference to user
  }

  const newStudent = await StudentModel.create(StudentData);
  return newStudent;
};

export const UserService = {
  createStudentIntoDB,
};
