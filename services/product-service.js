import { pool } from "../config/mysql-config.js";

export async function getProduct(limit) {
  const [singleRow] = await pool.query(`Select * from product limit ${limit}`);
  return singleRow;
}
