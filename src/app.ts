import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';

const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('University Server Running ');
});

export default app;
