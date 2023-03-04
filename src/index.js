//create sample express app using ecmascript modules and that connects to mysql database using mysql2 module
import express from "express";
import { pool } from "./db.js";
import usersRoute from "./routes/user.routes.js";
import indexRoutes from "./routes/index.routes.js";

import "./config.js";

const app = express();

const PORT = process.env.PORT || 3000;

//add json middleware
app.use(express.json());

//endpoint example with dummy without connecting to database

app.use(indexRoutes);
app.use(usersRoute);
//not found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

// // Path: .env
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD= Password
// DB_NAME=sample_db
