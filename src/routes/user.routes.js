//router crud methods for user endpoints

//import express
import express from "express";
//import user controller
import {
  create,
  deleteUser,
  findAll,
  findOne,
  update,
} from "../controllers/user.controller.js";
//create a router
const router = express.Router();
//create a user
router.post("/users", create);
//get all users
router.get("/users", findAll);
//get a user by id
router.get("/users/:id", findOne);
//update a user by id
router.put("/users/:id", update);
//delete a user by id
router.delete("/users/:id", deleteUser);
//export router
export default router;
