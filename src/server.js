import 'dotenv/config';
import express, { json } from 'express';
import index from './core';
import userRouter from './core/user/user-router';

const port = process.env.PORT || 8000;
const app = express();

app.use(json());
app.get('/', index);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is runnign at port: ${port}`);
});