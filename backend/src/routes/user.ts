import express from "express";
import { authJwt, userInfoAuth } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user"
import { RankController } from "../controllers/rank";
import { s3Util } from "../aws/s3_utils";
import { validationMiddleware } from "../middlewares/validation.middleware"
import { User } from "../controllers/dto/user"

export const userRouter = express.Router();

userRouter.get('/info', userInfoAuth, UserController.userInfo);
userRouter.get('/profile', UserController.getProfile);
userRouter.patch('/image', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.updateUserImage);
userRouter.delete('/image', authJwt, UserController.deleteUserImage);
userRouter.patch('/nickname', authJwt, validationMiddleware(User), UserController.updateUserNickname)
userRouter.patch('/password', authJwt, UserController.updateUserPassword)
userRouter.patch('/email', authJwt, UserController.updateUserEmail)
userRouter.get('/ranking', RankController.getRanking);
