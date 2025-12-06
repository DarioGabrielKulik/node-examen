import express from 'express'
import { verificarToken } from "../config/jwt.js";

const router = express.Router();


router.post("/", verificarToken, async (req, res) => {
  res.send("Token valido");
});

export default router;