import app from './app';
import config from './app/config';

import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);

    app.listen(config.port, () => {
      console.log(`University Server Running on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main();
