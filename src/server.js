import express, { json } from 'express';
import userRouter from './core/user/user-router';

const port = 3001;
const app = express();

app.use(json);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is runnign at ${port}`);
});