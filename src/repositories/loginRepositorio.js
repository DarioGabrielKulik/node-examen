import db from '../config/db.js';

const collection = db.collection('usuarios');

export const buscarPorEmail = async (email) => {
  const snapshot = await collection.where('email', '==', email).get();
  
  if (snapshot.empty) {
    return null;
  }
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

