import { getConnection, QueryRunner, Repository } from "typeorm";
import { HashTag } from "../entity/hashtag";
import { Question } from "../entity/question";

export class HashtagService {
    private hashtagRepository: Repository<HashTag>;
    private questionRepository: Repository<Question>;

    constructor() {
        this.hashtagRepository = getConnection().getRepository(HashTag);
        this.questionRepository = getConnection().getRepository(Question);
    }

    async getAllHashTagList(): Promise<any> {
        const hashtags = await this.hashtagRepository
            .find();
        return hashtags;
    }
    //해시 테그로 검색하기
    async getQuestionByHashTag(pageInfo): Promise<any> {
        const subQuery = await this.questionRepository
            .createQueryBuilder('covers')
            .select(['covers.id'])
            .leftJoin('covers.hashtag', 'hashtag')
            .where('hashtag.name = :name', { name: pageInfo.hashtag })
            .orderBy('covers.id', 'DESC')
            .limit(pageInfo.limit)
            .offset(pageInfo.offset)

        const questionList = await this.questionRepository
            .createQueryBuilder('question')
            .innerJoin(`(${subQuery.getQuery()})`, 'covers',
                'question.id = covers.covers_id')
            .setParameters(subQuery.getParameters())
            .innerJoinAndSelect('question.user', 'question_user')
            .leftJoin('question.hashtag', 'question_hashtag')
            .select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
                'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
                'question_hashtag.id', 'question_hashtag.name'
            ])
            .getMany();

        const hashtageQuestionCount = await await this.hashtagRepository
            .createQueryBuilder('hashtag')
            .leftJoinAndSelect('hashtag.question', 'question')
            .where('hashtag.name = :name', { name: pageInfo.hashtag })
            .select('COUNT(*) AS count')
            .getRawOne();

        return { questionList, questionCount: hashtageQuestionCount.count };
    }
    //해세 테그별 질문 갯수 조회하기
    async getQuestionCountOfHashTag(pageInfo): Promise<any> {
        const hashTagList = await this.hashtagRepository
            .createQueryBuilder('hashtag')
            .innerJoin('hashtag.question', 'question')
            .select(['hashtag.id AS id', 'hashtag.name AS name'])
            .addSelect('COUNT(*) AS  questionCount')
            .groupBy('hashtag.id')
            .addGroupBy('hashtag.name')
            .orderBy('questionCount', 'DESC')
            .limit(pageInfo.limit)
            .offset(pageInfo.offset)
            .getRawMany();

        const hashTagListCount = await this.hashtagRepository
            .createQueryBuilder('hashtag')
            .innerJoin('hashtag.question', 'question')
            .select('COUNT(hashtag.id) AS count')
            .groupBy('hashtag.id')
            .getRawMany();
        return { hashTagList, hashTagListCount: hashTagListCount.length };
    }
}
