module.exports = {
    globalSetup: "<rootDir>/dotenv-config.js",
    preset: "ts-jest",
    testEnviroment: "node",
    testMatch: ["**/tests/**/*.test.ts"]
};