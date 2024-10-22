export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemester = {
  name: 'Autumn' | 'Summer' | 'Fall';
  code: '01' | '02' | '03';
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TacademicSemesterNameCodeMapper = {
  [key: string]: string;
};

export type TacademicSemesterName = 'Autumn' | 'Summer' | 'Fall';

export type TacademicSemesterCode = '01' | '02' | '03';
