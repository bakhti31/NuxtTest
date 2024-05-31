import { drizzle } from "drizzle-orm/postgres-js";
// import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
// import { Client } from "pg";

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
// })
// import config from "./config";
// import { Logger } from "drizzle-orm";
// import moment from "moment";


// class MyLogger implements Logger {
//     logQuery(query: string, params: unknown[]): void {
//         const timestamp = moment().tz("Asia/Makassar").format("YYYY-MM-DD HH:mm:ss");
//         console.log(`\n[${timestamp}]`, "Query: ", query, params);
//     }
// }
const client = postgres(process.env.DATABASE_URL as string);
// const db = drizzle(client, { logger: new MyLogger });
// await client.connect();
const db = drizzle(client);

// migrate(db, { migrationsFolder: "drizzle" });

export default db;