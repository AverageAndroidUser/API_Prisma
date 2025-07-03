import express from "express";
import {verIngresos, verEgresos, crearIngreso, crearEgreso, actualizarIEGreso, eliminarIEGreso} from "../controladores/IEGresoControlador.js";

const router = express.Router();

router.get("/verIngresos", verIngresos);
router.get("/verEgresos", verEgresos);
router.post("/crearIngreso", crearIngreso);
router.post("/crearEgreso", crearEgreso);
router.put("/actualizarIEGreso/:id", actualizarIEGreso);
router.delete("/eliminarIEGreso/:id", eliminarIEGreso);

export default router;