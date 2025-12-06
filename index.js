import express from "express"; 
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";

dotenv.config(); // ← Mové esto arriba (antes de usar variables)

const app = express();

app.use(express.json());
app.use(cors());
router(app);

const PORT = process.env.PORT || 8080; // ← LEE la variable de Cloud Run
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
