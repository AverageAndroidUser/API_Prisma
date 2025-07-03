import express from "express";
import {verIEGresos, verIngresos, verEgresos, crearIngreso, crearEgreso, actualizarIEGreso, eliminarIEGreso, verIEGresoInf} from "../controladores/IEGresoControlador.js";

const router = express.Router();

router.get("/verIEGresoInf/:id", verIEGresoInf);
router.get("/verIEGresos", verIEGresos);
router.get("/verIngresos", verIngresos);
router.get("/verEgresos", verEgresos);
router.post("/crearIngreso", crearIngreso);
router.post("/crearEgreso", crearEgreso);
router.put("/actualizarIEGreso/:id", actualizarIEGreso);
router.delete("/eliminarIEGreso/:id", eliminarIEGreso);

export default router;