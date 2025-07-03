import express from "express";
import { verUsuario, actualizarUsuario } from "../controladores/usuarioControlador.js";

const router = express.Router();

router.get("/verUsuario/:id", verUsuario);
router.put("/actualizarUsuario/:id", actualizarUsuario);

export default router;