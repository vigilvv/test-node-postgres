import { pool } from "./db";

// this accepts command line arguments
export async function insertData() {
  const [name, color] = process.argv.slice(2);

  if (name === undefined || color === undefined)
    throw `Input values not supplied.`;

  try {
    const res = await pool.query(
      "INSERT INTO shark (name, color) VALUES($1, $2)",
      [name, color]
    );
    console.log(`Added a shark with the name ${name}`);
  } catch (e) {
    console.log(`Failed to add shark with ${e}`);
  }
}
