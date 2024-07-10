import { Router } from 'express';
import { UserRoutes } from '../../modules/user/user.route';
import { StudentRoutes } from '../../modules/student/student.route';
import path from 'path';

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
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
