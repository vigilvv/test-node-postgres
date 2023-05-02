import { pool } from "./db";

export async function modifyData() {
  let [id, name] = process.argv.slice(2);

  if (id === undefined || name === undefined)
    throw `Input values or not provided or not in proper format`;

  try {
    const res = await pool.query("UPDATE shark SET name = $1 WHERE id = $2", [
      name,
      id,
    ]);
    console.log("Table updated!");
  } catch (e) {
    console.log(`Unable to update table: ${e}`);
  }
}
