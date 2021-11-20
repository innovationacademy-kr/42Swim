import { Response, NextFunction } from 'express';
import { DecodedRequest } from '../definition/decoded_jwt'
import dotenv from "dotenv";
dotenv.config();

import { AnswerService } from '../service/answer_service';

const deleteAnswer = async (req: DecodedRequest, res: Response) => {
	const questionId = Number(req.query.questionId);
	const answerId = Number(req.query.answerId);
	const userId = req.decodedId;
	const answerService = new AnswerService();
	try {
		await answerService.delete({ answerId, questionId, userId });
		return res.status(200).json({
			result: true,
			message: "Delete Success"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const updateAnswer = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { questionId, answerId, text } = req.body;
	const userId = req.decodedId;
	const answerService: AnswerService = new AnswerService();

	try {
		await answerService.update({ text, answerId, questionId, userId });
		return res.status(200).json({
			result: true,
			message: "Update Success"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const uploadAnswer = async (req: DecodedRequest, res: Response) => {
	const userId = req.decodedId
	const { email, text, questionId } = req.body;
	const answerService: AnswerService = new AnswerService();

	try {
		await answerService.post({ email, text, userId, questionId });
		return res.status(200).json({
			result: true,
			message: "Upload Success"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const chooseAnswer = async (req: DecodedRequest, res: Response)=>{
	const userId = req.decodedId;
	const { questionId, answerId } = req.body;
	const answerService: AnswerService = new AnswerService();

	try {
		await answerService.chooseAnswer({questionId,answerId,userId});
		return res.status(200).json({
			result: true,
			message: "Choose Success"
		})
	}catch (error){
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

export const AnswerController = { uploadAnswer, updateAnswer, deleteAnswer,chooseAnswer }
