import {Router} from "express";
import {listaBebidasCalientes,obtenerBebidaCaliente,crearBebidaCaliente} from '../controllers/bebidaCaliente.js'

const router= Router();

router.get('/bebidasCalientes',listaBebidasCalientes)
router.get('/bebidasCalientes/:_id',obtenerBebidaCaliente)
router.post('/bebidasCalientes',crearBebidaCaliente)

export default router