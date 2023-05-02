import { pool } from "./db";

export async function retrieveData() {
  try {
    const res = await pool.query("SELECT * FROM shark");
    console.log(res.rows);
  } catch (e) {
    console.log(`Query failed with: ${e}`);
  }
}
