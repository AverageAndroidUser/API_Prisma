import express from "express";
import { crearMoneda, verMonedas, actualizarMonedas, eliminarMonedas } from "../controladores/monedaControlador.js";

const router = express.Router();

router.post("/crearMonedas", crearMoneda);
router.get("/verMonedas", verMonedas);
router.put("/actualizarMonedas/:id", actualizarMonedas);
router.delete("/eliminarMonedas/:id", eliminarMonedas);

export default router;
