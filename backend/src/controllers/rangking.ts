import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'

const getRangkingList = async (req: DecodedRequest, res: Response, next: NextFunction) => {

    try {
        return res.status(200).json({
            result: true,
            message: "create Success",
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export const rangkingController = {
    getRangkingList
}