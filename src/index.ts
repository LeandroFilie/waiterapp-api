import express from 'express';
import mongoose from 'mongoose';
import { router } from './app/router';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log('server is running on http://localhost:3001');
    });
  })
  .catch((error) => console.log(error));


