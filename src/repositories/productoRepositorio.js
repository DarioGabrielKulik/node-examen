import db from '../config/db.js';

const collection = db.collection('productos');

export const guardar = async (datos) => {
  const docRef = await collection.add(datos);
  return { id: docRef.id, ...datos };
};

export const obtenerTodos = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};