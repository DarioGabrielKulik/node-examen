import express from 'express'
import {success, errorServer} from '../config/response.js';
import { loguearse } from '../services/loginServicio.js';

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await loguearse(email,  password);
    success(req, res, usuario, 200);
  } catch (err) {
    const status = err.status || 500;
    errorServer(req, res, err.message, status);
  }
});

export default router;