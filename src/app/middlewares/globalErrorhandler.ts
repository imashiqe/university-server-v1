/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';

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

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Zod Error';
  }

  return res.status(statusCode).json({
    success: false,
    message,
    // error: err,
    errorSource,
  });
};

export default globalErrorHandler;
