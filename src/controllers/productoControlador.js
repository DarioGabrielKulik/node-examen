import express from 'express'
import {success, error} from '../config/response.js';
import { crearProducto, listarProductos } from '../services/productoServicio.js';

const router = express.Router();

// router.get("/", async (req, res)=>{
//      productos()
//         .then((message)=>success(req,res, message,200))
//         .catch(()=>error(req,res,'algo falloi',500))

// })
router.get("/", async (req, res) => {
  try {
    const productos = await listarProductos();
    success(req, res, productos, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, precio, imagen } = req.body;
    const producto = await crearProducto(nombre, precio, imagen);
    success(req, res, producto, 201);
  } catch (err) {
    error(req, res, err.message, 500);
  }
});



export default router;