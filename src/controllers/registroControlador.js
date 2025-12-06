import express from 'express'
import {success, errorServer} from '../config/response.js';
import { crearCuenta, listarCuentas } from '../services/registroServicio.js';

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const cuentas = await listarCuentas();
    success(req, res, cuentas, 200);
  } catch (err) {
    errorServer(req, res, err.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { email, nombre, password, password2 } = req.body;
    const cuenta = await crearCuenta(email, nombre, password, password2);
    success(req, res, cuenta, 201);
  } catch (err) {
    const status = err.status || 500;
    errorServer(req, res, err.message, status);
  }
});

export default router;