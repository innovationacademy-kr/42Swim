import { app } from "./index"
import { createConnection } from "typeorm";
import { monthRankReset } from "./lib/schedule";
import { insertSeed } from "./entity/seed/seed_data";

app.listen(5000, async () => {
    console.log("서버 가동");
    await createConnection();
    console.log("DB 연결");
    monthRankReset;
    // await insertSeed();
});
