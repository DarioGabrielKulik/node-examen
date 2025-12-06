import Producto from "../models/producto.js";
import { guardar, obtenerTodos, buscarPorNombre,  buscarPorId, eliminarPorId } from "../repositories/productoRepositorio.js";

export const crearProducto = async (nombre, precio, imagen) => {
  if (!nombre || !precio || !imagen) {
    const err = new Error('Todos los campos son obligatorios: nombre, precio, imagen');
    err.status = 400;
    throw err;
  }

  if (nombre.trim() === "" || precio.trim() === "" || imagen.trim() === "") {
    const err = new Error('Los campos no pueden estar vacíos');
    err.status = 400;
    throw err;
  }

  const productoExistente = await buscarPorNombre(nombre);

  if (productoExistente) {
  const err = new Error('Ya existe un producto con ese nombre');
  err.status = 400;
  throw err;
  }

  const producto = new Producto(nombre, precio, imagen);
  return await guardar(producto.toFirestore());
};

export const listarProductos = async () => {
  return await obtenerTodos();
};

export const obtenerProductoPorId = async (id) => {
  const producto = await buscarPorId(id);

  if (!producto) {
    const err = new Error("Producto no encontrado");
    err.status = 404;
    throw err;
  }

  return producto;
};

export const eliminarProducto = async (id) => {
  const eliminado = await eliminarPorId(id);

  if (!eliminado) {
    const err = new Error("Producto no encontrado");
    err.status = 404;
    throw err;
  }

  return true;
};