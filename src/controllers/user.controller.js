import { pool } from "../db.js";

export const create = async (req, res) => {
  try {
    const [result] = await pool.query("INSERT INTO users SET ?", req.body);
    res.json({ result: result, message: "User created successfully" });
  } catch (error) {
    res.json(error);
  }
};

export const findAll = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export const findOne = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM users WHERE id = ?",
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export const update = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE users SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM users WHERE id = ?",
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
