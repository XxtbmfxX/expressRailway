//import mysql2 and create a pool of connections using dotenv
import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";
dotenv.config();

//create a pool of connections
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
});
