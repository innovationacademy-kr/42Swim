import dotenv from "dotenv";
dotenv.config();

export default {
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_ROOT_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	synchronize: false,
	logging: false,
	entities: ["src/entity/**/*.ts"],
	migrations: ["src/migration/**/*.ts"],
	subscribers: ["src/subscriber/**/*.ts"],
	cli: {
		entitiesDir: "src/entity",
		migrationsDir: "src/migration",
		subscribersDir: "src/subscriber",
	},
  cache: {
    type: "redis",
    options: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }
  }
};
