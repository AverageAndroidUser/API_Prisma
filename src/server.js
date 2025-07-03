import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import monedaRutas from "./rutas/monedaRutas.js";
import usuarioRutas from "./rutas/usuarioRutas.js";
import categoriaIERutas from "./rutas/categoriaIERutas.js";
import IEGresoRutas from "./rutas/IEGresoRutas.js";
import { connect } from "./prismaClient.js";

dotenv.config();
const app = express();

app.use(cors()); // Permite peticiones desde otros orígenes (ej: frontend)
app.use(express.json()); // Permite recibir JSON desde el frontend
app.use("/Monedas", monedaRutas); // Prefijo para nuestras rutas
app.use("/Usuarios", usuarioRutas);
app.use("/CategoriasIE", categoriaIERutas); 
app.use("/IEGresos", IEGresoRutas); 

// conectarme a la base de datos
connect();
const PORT = process.env.PORT || 3001; //En caso de que el puerto en "env" este ocupado por otro servicio, se usa el "3001"
app.listen(PORT, () => {
  console.log(` 
Servidor corriendo en http://localhost:${PORT}`);
});
