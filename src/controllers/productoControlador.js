import express from 'express'
import {success, errorServer} from '../config/response.js';
import { crearProducto, listarProductos, obtenerProductoPorId, eliminarProducto } from '../services/productoServicio.js';

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
    errorServer(req, res, err.message, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await obtenerProductoPorId(id);

    if (!producto) {
      return errorServer(req, res, "Producto no encontrado", 404);
    }

    success(req, res, producto, 200);
  } catch (err) {
    errorServer(req, res, err.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, precio, imagen } = req.body;
    const producto = await crearProducto(nombre, precio, imagen);
    success(req, res, producto, 201);
  } catch (err) {
    const status = err.status || 500;
    errorServer(req, res, err.message, status);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const eliminado = await eliminarProducto(id);

    if (!eliminado) {
      return errorServer(req, res, "Producto no encontrado", 404);
    }

    success(req, res, { mensaje: "Producto eliminado" }, 200);
  } catch (err) {
    errorServer(req, res, err.message, 500);
  }
});


export default router;