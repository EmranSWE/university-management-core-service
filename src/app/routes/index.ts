import express from 'express';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/AcademicSemester.route';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
  {
    path: '/faculty',
    route: facultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
