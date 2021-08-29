import express from "express";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnMiddleware).get(getJoin).post(postJoin);
rootRouter.route("/login").all(publicOnMiddleware).get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
