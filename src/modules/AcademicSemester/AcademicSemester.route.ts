import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { AcademicSemesterController } from './AcademicSemester.controller';
import { AcademicSemesterValidation } from './AcademicSemesterValidation';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);
router.get('/get-semester', AcademicSemesterController.getAllFromDB);

export const AcademicSemesterRoutes = router;
