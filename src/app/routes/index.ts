import { Router } from 'express';
import { UserRoutes } from '../../modules/user/user.route';
import { StudentRoutes } from '../../modules/student/student.route';

import { AcademicSemesterRoute } from '../../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoute } from '../../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoute } from '../../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoute,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
