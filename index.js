import express from "express"; 
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
router(app);
dotenv.config();
const PORT = 3000;
app.listen(PORT, ()=> console.log("Hola Dari"))
