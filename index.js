import express from "express"; 
import router from "./router.js";

const app = express();
app.use(express.json());
router(app);


const PORT = 3000;
app.listen(PORT, ()=> console.log("Hola Dari"))
