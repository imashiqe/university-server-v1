import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);

    server = app.listen(config.port, () => {
      console.log(`University Server Running on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

// const test = async (req: Request, res: Response) => {
//   Promise.reject();
// };

main();

process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on('uncaughtException', () => {
  process.exit(1);
});
