import {Router} from "express";
import {listaBebidasHeladas,obtenerBebidaHelada,crearBebidaHelada} from '../controllers/bebidaHelada.js'

const router= Router();

router.get('/bebidasHeladas',listaBebidasHeladas)
router.get('/bebidasHeladas/:_id',obtenerBebidaHelada)
router.post('/bebidasHeladas',crearBebidaHelada)

export default router