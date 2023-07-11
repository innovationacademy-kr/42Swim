import redis from "redis";

export const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

// export const redisClient = redis.createClient(process.env.REDIS_PORT);
