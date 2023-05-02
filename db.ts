import { Pool } from "pg";

export const pool = new Pool({
  user: "fish_user",
  database: "fish",
  password: "password",
  port: 5112,
  //   host: "localhost",
  host: "127.0.0.1",
});
