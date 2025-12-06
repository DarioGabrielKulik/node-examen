import db from '../config/db.js';

const collection = db.collection('usuarios');

export const guardar = async (datos) => {
  const docRef = await collection.add(datos);
  return { id: docRef.id, ...datos };
};

export const obtenerTodos = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const buscarPorEmail = async (email) => {
  const snapshot = await collection.where('email', '==', email).get();
  
  if (snapshot.empty) {
    return null;
  }
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};