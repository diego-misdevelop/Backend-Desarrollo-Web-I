import {Router} from "express";
import {listaBebidasHeladas,obtenerBebidaHelada,crearBebidaHelada,eliminarBebidaHelada, actualizarBebidaHelada} from '../controllers/bebidaHelada.js'

const router= Router();

router.get('/bebidasHeladas',listaBebidasHeladas)
router.get('/bebidasHeladas/:id',obtenerBebidaHelada)
router.post('/bebidasHeladas',crearBebidaHelada)
router.delete('/bebidasHeladas/:id',eliminarBebidaHelada)
router.patch('/bebidasHeladas/:id',actualizarBebidaHelada)

export default router