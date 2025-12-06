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

export const buscarPorNombre = async (nombre) => {
  const snapshot = await collection.where('nombre', '==', nombre).get();
  
  if (snapshot.empty) {
    return null;
  }
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

export const buscarPorId = async (id) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return null;

  return { id: doc.id, ...doc.data() };
};


export const eliminarPorId = async (id) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return null; 

  await docRef.delete();
  return true; 
};