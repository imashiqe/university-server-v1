<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

const globalErrorHandler = (err: any, req: Request, res: Response) => {
=======
import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
>>>>>>> b1398cb25ba1ea52979869bae3ee64af3556dea5
  const statusCode = 500;
  const message = err.message || 'Something went wrong!';

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
