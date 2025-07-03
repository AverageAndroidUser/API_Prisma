import express from "express";
import {verCategoriaEgr, verCategoriaIng} from "../controladores/categoriaIEControlador.js";

const router = express.Router();

router.get("/verCategoriaIng", verCategoriaIng);
router.get("/verCategoriaEgr", verCategoriaEgr);

export default router;