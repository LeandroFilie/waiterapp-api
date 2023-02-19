import express from 'express';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log('server is running on http://localhost:3001');
    });
  })
  .catch((error) => console.log(error));


