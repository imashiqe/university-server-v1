import express, { Application, Request, Response } from 'express';

import cors from 'cors';

import router from './app/routes';

const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//application routes

app.use('/api/v1/', router);

// Define the notFound middleware
const notFound = (req: Request, res: Response) => {
  res.status(404).send('Not Found');
};

app.use(notFound);

export default app;
