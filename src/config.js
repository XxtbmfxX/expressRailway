import { config } from "dotenv";
config();

console.log(process.env.DB_USER);

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PORT = process.env.DB_PORT || "3307";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mrrobot123";
export const DB_NAME = process.env.DB_NAME || "devauthchallenge";
