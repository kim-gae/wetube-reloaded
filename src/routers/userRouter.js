import express from "express";
import { see, logout, getChangePassword, postChangePassword, getEdit, postEdit, startGithubLogin, finishGithubLogin } from "../controllers/userController";
import { protectorMiddleware, publicOnMiddleware, avatarUpload } from "../middlewares";
import User from "../models/User";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatar"), postEdit);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/start", publicOnMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
