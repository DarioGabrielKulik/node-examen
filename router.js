import producto from "./src/controllers/productoControlador.js"
import registro from "./src/controllers/registroControlador.js"
import admin from "./src/controllers/adminControlador.js"
import login from "./src/controllers/loginControlador.js"
import { notFound } from "./src/config/response.js";

const router = (server)=>{
    server.use("/productos", producto);
    server.use("/registro", registro);
    server.use("/login", login);
    server.use("/admin", admin);  
    server.use((req, res) => { notFound(req, res, 'Ruta no encontrada', 404);});
};

export default router;