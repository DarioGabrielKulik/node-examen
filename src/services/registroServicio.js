import Registro from "../models/registro.js";
import { guardar, obtenerTodos, buscarPorEmail } from "../repositories/registroRepositorio.js";
import bcript from 'bcrypt';

export const crearCuenta = async (email, nombre, password, password2) => {
  if (!email|| !nombre|| !password || !password2) {
    const err = new Error('Todos los campos son obligatorios: nombre, precio, imagen');
    err.status = 400;
    throw err;
  }

  if (email.trim() === "" || nombre.trim() === "" || password.trim() === "" || password2.trim() === "") {
    const err = new Error('Los campos no pueden estar vacíos');
    err.status = 400;
    throw err;
  }

  if (password !== password2 ) {
    const err = new Error('Las contraseña no son iguales');
    err.status = 400;
    throw err;
  }

  const emailExistente = await buscarPorEmail(email);

  if (emailExistente) {
  const err = new Error('Ya existe este usuario');
  err.status = 400;
  throw err;
  }

  const hashPassword = bcript.hashSync(password, 10)

  const registro = new Registro(email, nombre, hashPassword);
  
  return await guardar(registro.toFirestore());
};

export const listarCuentas = async () => {
  return await obtenerTodos();
};