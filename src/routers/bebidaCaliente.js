import {Router} from "express";
import {listaBebidasCalientes,obtenerBebidaCaliente,crearBebidaCaliente,eliminarBebidaCaliente, actualizarBebidaCaliente} from '../controllers/bebidaCaliente.js'

const router= Router();

router.get('/bebidasCalientes',listaBebidasCalientes)
router.get('/bebidasCalientes/:id',obtenerBebidaCaliente)
router.post('/bebidasCalientes',crearBebidaCaliente)
router.delete('/bebidasCalientes/:id',eliminarBebidaCaliente)
router.patch('/bebidasCalientes/:id',actualizarBebidaCaliente)

export default router