import { buscarPorEmail } from "../repositories/loginRepositorio.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loguearse = async (email, password) => {

  const usuario = await buscarPorEmail(email);

  if (!usuario) {
  const err = new Error('El usuario no existe');
  err.status = 400;
  throw err;
  }  

  const passwordCorrecto = await bcrypt.compare(password, usuario.password);



  if ( !passwordCorrecto ) {
    const err = new Error('El password es incorrecto');
    err.status = 401;
    throw err;
  }

   
  const token = jwt.sign(
    {
      id: usuario.id,     
      email: usuario.email
    },
    process.env.JWT_SECRET, 
    { expiresIn: "1h" }    
  );

  return token;
};


