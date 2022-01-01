import { UserService } from "../../service/user_service"
import { QuestionService } from "../../service/question_service";
import { redisClient } from "../../lib/redis";
import connection from '../../connection';

import { UserNotFoundException, UserForbiddenException } from "../../exception/user_exception";
import { QuestionNotFoundException, QuestionForbiddenException } from "../../exception/question_exception";


describe('QuestionService test', () => {
    const userInfo = {
        email: "tester1@gmail.com",
        nickname: "tester1",
        password: "$2b$10$rcA8OFnWj2XexjUG15JcIemx41ii.LUHz./rApyh0S2hwmSBkChfa",
        photo: ""
    }

    const questionInfo = {
        questionId: undefined,
        title: "question1",
        text: "question 1 content",
        hashtag: ["tag1", "tag2"],
        userId: undefined,
    }

    beforeAll(async () => {
        await connection.create();
    })
    afterAll(async () => {
        await connection.close();
        await redisClient.quit();
    })
    beforeEach(async () => {
        await connection.clear([
            { name: "question_hashtag_hashtag", tableName: "question_hashtag_hashtag" },
            { name: "HashTag", tableName: "hashtag" },
            { name: "Question", tableName: "question" },
            { name: "User", tableName: "user" },
        ]);
        questionInfo.questionId = undefined;
        questionInfo.userId = undefined;
        questionInfo.title = "question1";
        questionInfo.text = "question 1 content";
        questionInfo.hashtag = ["tag1", "tag2"];
    })

    test('post 성공 테스트 (정상적인 데이터)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        const questionId = await questionService.post(questionInfo);

        expect(questionId).toBeDefined();
    });

    test('post 성공 테스트 (해시태그가 없음)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        questionInfo.hashtag = [];
        const questionId = await questionService.post(questionInfo);

        expect(questionId).toBeDefined();
    });

    test('post 성공 테스트 (title, text 가 "")', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        questionInfo.title = "";
        questionInfo.text = "";
        const questionId = await questionService.post(questionInfo);

        expect(questionId).toBeDefined();
    });

    test('post 실패 테스트 (존재하지 않는 유저)', async () => {
        const questionService: QuestionService = new QuestionService();

        try {
            questionInfo.userId = 1;
            await questionService.post(questionInfo);
        }
        catch (err) {
            const err2 = new UserNotFoundException(questionInfo.userId);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('update 성공 테스트 (정상적인 데이터)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        const questionId = await questionService.post(questionInfo);
        expect(questionId).toBeDefined();

        questionInfo.questionId = questionId;
        questionInfo.title = "new title";
        questionInfo.text = "new text";
        questionInfo.hashtag = ["newtag1", "newtag2"];

        try {
            await questionService.update(questionInfo);
        }
        catch (err) {
            console.log(err);
        }
    });

    test('update 성공 테스트 (해시태그가 없는 데이터)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        const questionId = await questionService.post(questionInfo);
        expect(questionId).toBeDefined();

        questionInfo.questionId = questionId;
        questionInfo.title = "new title";
        questionInfo.text = "new text";
        questionInfo.hashtag = [];

        try {
            await questionService.update(questionInfo);
        }
        catch (err) {
            console.log(err);
        }
    });

    test('update 성공 테스트 (title, text 가 "")', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        const questionId = await questionService.post(questionInfo);
        expect(questionId).toBeDefined();

        questionInfo.questionId = questionId;
        questionInfo.title = "";
        questionInfo.text = "";
        questionInfo.hashtag = ["newtag1", "newtag2"];

        try {
            await questionService.update(questionInfo);
        }
        catch (err) {
            console.log(err);
        }
    });

    test('update 실패 테스트 (존재하지 않는 질문글)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;

        questionInfo.questionId = 1;
        questionInfo.title = "new title";
        questionInfo.text = "new text";
        questionInfo.hashtag = ["newtag1", "newtag2"];

        try {
            await questionService.update(questionInfo);
        }
        catch (err) {
            const err2 = new QuestionNotFoundException(questionInfo.questionId);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('update 실패 테스트 (수정 권한 없음)', async () => {
        const userService: UserService = new UserService();
        const questionService: QuestionService = new QuestionService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        questionInfo.userId = tester1.newUser.id;
        const questionId = await questionService.post(questionInfo);
        expect(questionId).toBeDefined();

        questionInfo.userId = tester1.newUser.id + 1;
        questionInfo.questionId = questionId;
        questionInfo.title = "new title";
        questionInfo.text = "new text";
        questionInfo.hashtag = ["newtag1", "newtag2"];

        try {
            await questionService.update(questionInfo);
        }
        catch (err) {
            console.log(err);
            const err2 = new QuestionForbiddenException(questionInfo.questionId);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

});