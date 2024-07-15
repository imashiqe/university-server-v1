import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await .createAcademicDepartmentIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllAcademicDepartmentFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(
      facultyId
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(
    facultyId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is Updated successfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
