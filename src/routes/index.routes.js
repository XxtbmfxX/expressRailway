import express from "express";
const router = express.Router();
//dummy enpoint to test if pool connection is working
router.get("/test", async (req, res) => {
  const [resp] = await pool.query("SELECT 1+1 AS solution");
  res.json(resp);
});

export default router;
