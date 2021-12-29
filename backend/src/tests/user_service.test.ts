import { UserService } from "../service/user_service"

describe('UserService test', () => {
    // const res = {
    //     status: jest.fn(() => res),
    //     send: jest.fn()
    // };
    // const next = jest.fn();

    test('.env.test 사용 테스트', () => {
        console.log(process.env.MYSQL_DATABASE);
        expect(true).toBe(true);
        // const userService: UserService = new UserService();

        // const req = {
        //     isAuthenticated: jest.fn(() => true),
        // };
        // expect(next).toBeCalledTimes(1);
    });

    // test('로그인되어 있지 않으면 isLoggedIn이 에러를 응답해야 함', () => {
    //     const req = {
    //         isAuthenticated: jest.fn(() => false),
    //     };
    //     expect(res.status).toBeCalledWith(403);
    //     expect(res.send).toBeCalledWith('로그인 필요');
    // });
});