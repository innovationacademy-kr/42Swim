import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import bcrypt from "bcrypt";
import Strategy from "passport-42";
const FortyTwoStrategy = Strategy;

import { UserService } from "../service/user_service";
import { RankService } from "../service/rank_service";

export const fourtyTwoStrategy = () => {

  passport.use(
    new FortyTwoStrategy(
      {
        clientID: process.env.FORTYTWO_CLIENT_ID,
        clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
        callbackURL: process.env.RETURN_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          const encryptedPassword = await bcrypt.hashSync(process.env.PASSWORD, +process.env.SALT_ROUNDS);
          const userService: UserService = new UserService();
          const { exUser, newUser } = await userService.createUser({
            nickname: profile.username,
            email: profile.emails[0].value,
            password: encryptedPassword,
            photo: profile.photos[0].value,
          });
          if (exUser) {
            return done(null, exUser);
          } else {
            const rankService: RankService = new RankService();
            await rankService.setRank(newUser.id);
            await rankService.setUserName(newUser.id, newUser.nickname);
            await rankService.setUserProfile(newUser.id, newUser.photo);
            return done(null, newUser);
          }
        } catch (error) {
          console.log(error);
          return done(error);
        }
        // callback함수를 실행하면 두 번째 인자로 넣은 정보를 serializeUser 미들웨어로 전달한다.
      }
    )
  );
};
