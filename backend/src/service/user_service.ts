import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

import { getConnection, Repository } from "typeorm";
import { UserNotFoundException, UserForbiddenException } from "../exception/user_exception";


import { User } from "../entity/user";
import { Question } from "../entity/question";
import { Answer } from "../entity/answer"
import { Comment } from "../entity/comment";

export class UserService {
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private commentRepository: Repository<Comment>;

	constructor() {
		this.questionRepository = getConnection().getRepository(Question);
		this.answerRepository = getConnection().getRepository(Answer);
		this.userRepository = getConnection().getRepository(User);
		this.commentRepository = getConnection().getRepository(Comment);
	}

	async getUserProfile(userId: number) {
		const user = await this.userRepository
			.createQueryBuilder('user')
			.where('user.id = :userId', { userId })
			.loadRelationCountAndMap('user.questionCount', 'user.question')
			.loadRelationCountAndMap('user.answerCount', 'user.answer')
			.loadRelationCountAndMap('user.commentCount', 'user.comment')
			.select(['user.id', 'user.nickname', 'user.email', 'user.photo', 'user.liked_count'])
			.getOne();

		return user;
	}

	async findUserByEmail(email: string) {
		const user = await this.userRepository
			.findOne({ where: { email: email } });
		return user;
	}

	async findUserById(id: number) {
		const user = await this.userRepository
			.findOne({ where: { id: id } });
		return user;
	}

	async updateUserPassword(id: number, curPassword: string, newPassword: string) {
		const user = await this.userRepository
			.findOne({ where: { id: id } });
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		const result = await bcrypt.compare(curPassword, user.password);
		if (result) {
			user.password = newPassword || user.password;
			const newUser = await this.userRepository.save(user);
		}
		else {
			throw new UserForbiddenException(id);
		}

	}

	async updateUserPhoto(id: number, userPhoto: string) {
		const photo: string = userPhoto;
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		user.photo = photo || user.photo;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async deleteUserPhoto(id: number) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		user.photo = "";
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async updateUserNickname(id: number, userNickname: string) {
		const nickName: string = userNickname;
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		user.nickname = nickName || user.nickname;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async updateUserEmail(id: number, email: string) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		user.email = email || user.email;
		await this.userRepository.save(user);
	}

	async createUser(createUserInfo) {
		const { email } = createUserInfo;
		const user = await this.userRepository
			.findOne({ where: { email: email } });
		if (user) {
			return { exUser: user, newUser: undefined };
		}
		const newUser = await this.userRepository.save(createUserInfo);
		return { exUser: undefined, newUser: newUser };
	}

	async getAllUserId() {
		const userList = await this.userRepository
			.createQueryBuilder('user')
			.select('user.id')
			.getMany();
		return userList;
	}

	async getUserEmail(userId: number) {
		const user = await this.userRepository
			.createQueryBuilder('user')
			.select('user.email')
			.where('user.id = :userId', { userId })
			.getOne();
		return user;
	}

	async getUserStatistics(startAt, endAt) {
		const questionSubQuery = await this.userRepository
			.createQueryBuilder('question_covers')
			.innerJoin('question_covers.question', 'question')
			.select(['question_covers.id'])
			.addSelect('COUNT(question_covers.id) AS questionCount')
			.where('question.created_at > :startAt', { startAt })
			.andWhere('question.created_at < :endAt', { endAt })
			.groupBy('question_covers.id')

		const answerSubQuery = await this.userRepository
			.createQueryBuilder('answer_covers')
			.innerJoin('answer_covers.answer', 'answer')
			.select(['answer_covers.id'])
			.addSelect('COUNT(answer_covers.id) AS answerCount')
			.where('answer.created_at > :startAt', { startAt })
			.andWhere('answer.created_at < :endAt', { endAt })
			.groupBy('answer_covers.id');

		const chosenAnswerSubQuery = await this.userRepository
			.createQueryBuilder('chosen_answer_covers')
			.innerJoin('chosen_answer_covers.answer', 'answer')
			.select(['chosen_answer_covers.id'])
			.addSelect('COUNT(chosen_answer_covers.id) AS chosenAnswerCount')
			.where('answer.created_at > :startAt', { startAt })
			.andWhere('answer.created_at < :endAt', { endAt })
			.andWhere('answer.is_chosen = :flag', { flag: true })
			.groupBy('chosen_answer_covers.id');

		const commentSubQuery = await this.userRepository
			.createQueryBuilder('comment_covers')
			.innerJoin('comment_covers.comment', 'comment')
			.select(['comment_covers.id'])
			.addSelect('COUNT(comment_covers.id) AS commentCount')
			.where('comment.created_at > :startAt', { startAt })
			.andWhere('comment.created_at < :endAt', { endAt })
			.groupBy('comment_covers.id');

		const userStatistics = await this.userRepository
			.createQueryBuilder('user')
			.leftJoin(`(${questionSubQuery.getQuery()})`, 'question_covers',
				'user.id = question_covers.question_covers_id')
			.setParameters(questionSubQuery.getParameters())
			.leftJoin(`(${answerSubQuery.getQuery()})`, 'answer_covers',
				'user.id = answer_covers.answer_covers_id')
			.setParameters(answerSubQuery.getParameters())
			.leftJoin(`(${chosenAnswerSubQuery.getQuery()})`, 'chosen_answer_covers',
				'user.id = chosen_answer_covers.chosen_answer_covers_id')
			.setParameters(chosenAnswerSubQuery.getParameters())
			.leftJoin(`(${commentSubQuery.getQuery()})`, 'comment_covers',
				'user.id = comment_covers.comment_covers_id')
			.setParameters(commentSubQuery.getParameters())
			.select(['user.id', 'user.email', 'user.liked_count',
				'question_covers.questionCount', 'answer_covers.answerCount',
				'chosen_answer_covers.chosenAnswerCount', 'comment_covers.commentCount'])
			.getRawMany();

		return userStatistics;
	}

}
