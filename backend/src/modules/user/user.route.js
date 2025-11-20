import { Router } from "express";
import { registerUser } from "./user.controller.js";
import { validate } from "../../core/middleware/validate.js";
import { registerSchema } from "../../shared/validators/user.validator.js";

const userRouter = Router();

userRouter.post("/register", validate(registerSchema), registerUser)

export default userRouter;