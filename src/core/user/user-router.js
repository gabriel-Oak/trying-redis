import { Router } from "express";
import { store } from "./user-controller";

const userRouter = Router();
userRouter.post('/user', store);

export default userRouter;