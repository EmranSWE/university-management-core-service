import express from 'express';
import auth from '../../app/middlewares/auth';
import validateRequest from '../../app/middlewares/validateRequest';
import { ENUM_USER_ROLE } from '../../enums/user';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validations';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllFromDB);
router.get('/:id', AcademicDepartmentController.getByIdFromDB);

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteByIdFromDB
);

export const academicDepartmentRoutes = router;
