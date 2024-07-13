import {
  TacademicSemesterCode,
  TacademicSemesterName,
  TacademicSemesterNameCodeMapper,
  TMonths,
} from './academicSemester.interface';

export const Month: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterName: TacademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const academicSemesterNameCodeMapper: TacademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const AcademicSemesterCode: TacademicSemesterCode[] = ['01', '02', '03'];
