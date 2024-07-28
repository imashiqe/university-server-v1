/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, Request, Response } from 'express';

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];

  const errorSource: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ];

  return res.status(statusCode).json({
    success: false,
    message,
    // error: err,
    errorSource,
  });
};

export default globalErrorHandler;
