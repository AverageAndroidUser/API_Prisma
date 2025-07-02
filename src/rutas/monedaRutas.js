import express from "express";
import { crearMoneda, verMonedas } from "../controladores/monedaControlador.js";

const router = express.Router();

router.post("/monedas", crearMoneda);
router.get("/obtenerMonedas", verMonedas);
//router.put("/monedas", actualizarMoneda);
//router.delete("/monedas/:id", eliminarMoneda);

export default router;
