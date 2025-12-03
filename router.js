import producto from "./src/controllers/productoControlador.js"

const router = (server)=>{
    server.use("/productos", producto);
};

export default router;