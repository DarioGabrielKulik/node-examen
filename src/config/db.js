import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Inicializar sin credenciales para el emulador
initializeApp({
  projectId: 'demo-project-id',
});

// Configurar para usar el emulador
const db = getFirestore();
db.settings({
  host: 'localhost:8080',
  ssl: false
});

export default db;