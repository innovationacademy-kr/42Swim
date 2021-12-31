import { UserService } from "../../service/user_service"
import { redisClient } from "../../lib/redis";
import connection from '../../connection';

import { UserNotFoundException, UserForbiddenException } from "../../exception/user_exception";


describe('UserService test', () => {
    const userInfo = {
        email: "tester1@gmail.com",
        nickname: "tester1",
        password: "$2b$10$rcA8OFnWj2XexjUG15JcIemx41ii.LUHz./rApyh0S2hwmSBkChfa",
        photo: ""
    }
    beforeAll(async () => {
        await connection.create();
    })
    afterAll(async () => {
        await connection.close();
        await redisClient.quit();
    })
    beforeEach(async () => {
        await connection.clear([{ name: "User", tableName: "user" }]);
    })

    test('createUser 유저 생성 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);

        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);
    });

    test('createUser 유저 생성 실패 테스트 (이메일 중복)', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.createUser(userInfo);
        expect(tester2.newUser).toBe(undefined);
        expect(tester2.exUser.email).toBe(userInfo.email);
        expect(tester2.exUser.nickname).toBe(userInfo.nickname);
        expect(tester2.exUser.photo).toBe(userInfo.photo);
    });

    test('getUserProfile 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.getUserProfile(tester1.newUser.id);
        expect(tester2.id).toBe(tester1.newUser.id);
    });

    test('getUserProfile 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        const tester2 = await userService.getUserProfile(1);
        expect(tester2).toBe(undefined);
    });

    test('findUserByEmail 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.findUserByEmail(tester1.newUser.email);
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe(userInfo.photo);
    });

    test('findUserByEmail 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        const tester2 = await userService.findUserByEmail(userInfo.email);
        expect(tester2).toBe(undefined);
    });

    test('findUserById 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.findUserById(tester1.newUser.id);
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe(userInfo.photo);
    });

    test('findUserById 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        const tester2 = await userService.findUserById(1);
        expect(tester2).toBe(undefined);
    });

    test('findUserById 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.findUserById(tester1.newUser.id);
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe(userInfo.photo);
    });

    test('findUserById 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        const tester2 = await userService.findUserById(1);
        expect(tester2).toBe(undefined);
    });

    test('updateUserPhoto 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.updateUserPhoto(tester1.newUser.id, "newPhoto");
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe("newPhoto");
    });

    test('updateUserPhoto 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();
        try {
            const tester2 = await userService.updateUserPhoto(1, "newPhoto");
        }
        catch (err) {
            const err2 = new UserNotFoundException(1);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('updateUserPassword 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        await userService.updateUserPassword(tester1.newUser.id, "tester1", "1234");

        const tester2 = await userService.findUserById(tester1.newUser.id);
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe(userInfo.photo);
        expect(tester2.password).toBe("1234");
    });

    test('updateUserPassword 실패 테스트 (비밀번호 불일치)', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        try {
            await userService.updateUserPassword(tester1.newUser.id, "1111", "1234");
        }
        catch (err) {
            const err2 = new UserForbiddenException(tester1.newUser.id);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('updateUserPassword 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        try {
            await userService.updateUserPassword(1, "tester1", "1234");
        }
        catch (err) {
            const err2 = new UserNotFoundException(1);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('updateUserNickname 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.updateUserNickname(tester1.newUser.id, "newNickname");
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe("newNickname");
        expect(tester2.photo).toBe(tester1.newUser.photo);
    });

    test('updateUserNickname 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();
        try {
            const tester2 = await userService.updateUserNickname(1, "newNickname");
        }
        catch (err) {
            const err2 = new UserNotFoundException(1);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('updateUserEmail 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        await userService.updateUserEmail(tester1.newUser.id, "tester2@gmail.com");

        const tester2 = await userService.findUserById(tester1.newUser.id);
        expect(tester2.email).toBe("tester2@gmail.com");
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe(userInfo.photo);
    });

    test('updateUserEmail 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();

        try {
            await userService.updateUserEmail(1, "tester2@gmail.com");
        }
        catch (err) {
            const err2 = new UserNotFoundException(1);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });

    test('deleteUserPhoto 성공 테스트', async () => {
        const userService: UserService = new UserService();

        const tester1 = await userService.createUser(userInfo);
        expect(tester1.exUser).toBe(undefined);
        expect(tester1.newUser.email).toBe(userInfo.email);
        expect(tester1.newUser.nickname).toBe(userInfo.nickname);
        expect(tester1.newUser.photo).toBe(userInfo.photo);

        const tester2 = await userService.deleteUserPhoto(tester1.newUser.id);
        expect(tester2.email).toBe(userInfo.email);
        expect(tester2.nickname).toBe(userInfo.nickname);
        expect(tester2.photo).toBe("");
    });

    test('deleteUserPhoto 실패 테스트 (존재하지 않는 유저)', async () => {
        const userService: UserService = new UserService();
        try {
            const tester2 = await userService.deleteUserPhoto(1);
        }
        catch (err) {
            const err2 = new UserNotFoundException(1);
            expect(err.status).toBe(err2.status);
            expect(err.message).toBe(err2.message);
        }
    });
});