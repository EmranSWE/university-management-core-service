import { AcademicSemester } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './AcademicSemester.service';

const insertIntoDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await AcademicSemesterService.insertIntoDB(req.body);
      sendResponse<AcademicSemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester Created',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'code', 'year']);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  console.log(filters, options);
  const result = await AcademicSemesterService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Data fetched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getDataFromId(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Data fetched',

    data: result,
  });
});
export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
