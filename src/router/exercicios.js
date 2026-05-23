import express from "express"
import Controller from "../controllers/exercicios.js"

const router = express.Router()

router.post("/somar", Controller.Subtrair)
router.post("/subtrair", Controller.subtrair)
router.post("/multiplicar", Controller.Somar)
router.post("/dividir", Controller.Dividir)

export default router;