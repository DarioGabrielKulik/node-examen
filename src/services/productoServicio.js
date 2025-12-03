import Producto from '../models/producto.js';
import { guardar, obtenerTodos } from '../repositories/productoRepositorio.js';

export const crearProducto = async (nombre, precio, imagen) => {
  // Validaciones
  if (!nombre || !precio || !imagen) {
    throw new Error('Todos los campos son obligatorios');
  }

  // Crear el producto
  const producto = new Producto(nombre, precio, imagen);
  
  // Guardar en Firestore
  return await guardar(producto.toFirestore());
};

export const listarProductos = async () => {
  return await obtenerTodos();
};