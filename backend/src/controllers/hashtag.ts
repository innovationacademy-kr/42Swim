import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import { HashtagService } from '../service/hashtag_service';

const getAllHashTagList = async (req: Request, res: Response, next: NextFunction) => {
    const hashtagService: HashtagService = new HashtagService();
    try {
        const hashtagList = await hashtagService.getAllHashTagList();
        return res.status(200).json({
            hashtag: hashtagList,
            result: true,

        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const getQuestionByHashTag = async (req: Request, res: Response, next: NextFunction) => {
    const hashtag: string = String(req.query.hashtag);
    const pageNumber = Number(req.query.pageNumber) - 1 | 0;
    const limit = 8;
    const offset = pageNumber * limit;
    const pageInfo = { hashtag, limit, offset };
    const hashtagService: HashtagService = new HashtagService();
    try {
        const { questionList, questionCount } = await hashtagService.getQuestionByHashTag(pageInfo);
        return res.status(200).json({
            questionList: questionList,
            questionCount: questionCount,
            result: true,
        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const getQuestionCountOfHashTag = async (req: Request, res: Response, next: NextFunction) => {
    const hashtag: string = String(req.query.hashtag);
    const pageNumber = Number(req.query.pageNumber) - 1 | 0;
    const limit = 30;
    const offset = pageNumber * limit;
    const pageInfo = { hashtag, limit, offset };
    const hashtagService: HashtagService = new HashtagService();
    try {
        const hashtagList = await hashtagService.getQuestionCountOfHashTag(pageInfo);
        return res.status(200).json({
            hashtag: hashtagList,
            result: true,
        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export const HashTagController = { getAllHashTagList, getQuestionByHashTag, getQuestionCountOfHashTag }
