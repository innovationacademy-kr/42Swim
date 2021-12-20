import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { RankController } from "../controllers/rank";

export const rankRouter = express.Router();

rankRouter.patch(process.env.MONTHRANK_RESET, RankController.resetMonthRanking);
