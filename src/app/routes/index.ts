import express from 'express';
import { AcademicSemesterRoutes } from '../../modules/AcademicSemester/AcademicSemester.route';
import { studentRoutes } from '../../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/student',
    route: studentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
