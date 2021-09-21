import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Response, NextFunction } from 'express';
import { DecodedRequest } from "../definition/definitionfile"
dotenv.config();

import { UserService } from "../service/UserService";

const userInfo = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id: number = req.decodedId
    try {
        const user = await UserService.findUserById(id);
        if (user) {
            res.status(200).json({
                result: true,
                data: {
                    email: user.email,
                    nickname: user.nickname,
                    image: user.photo
                }
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "No such information"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const userUpdate = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    let { nickname, password } = req.body;
    password = await bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
    const photo = req.file.key;
    try {
        const user = await UserService.updateUser({ id, nickname, password, photo });
        if (user) {
            res.json({
                exUser: user
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "No such information"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export default {
    userInfo: userInfo,
    userUpdate: userUpdate
}