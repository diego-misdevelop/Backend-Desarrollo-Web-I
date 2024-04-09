import {Router} from "express";
import {listaDesechablesEmpaques,obtenerDesechableEmpaque,creardesechableEmpaque, eliminardesechableEmpaque, actualizardesechableEmpaque} from '../controllers/desechableEmpaque.js'

const router= Router();

router.get('/desechablesEmpaques',listaDesechablesEmpaques)
router.get('/desechablesEmpaques/:id',obtenerDesechableEmpaque)
router.post('/desechablesEmpaques',creardesechableEmpaque)
router.delete('/desechablesEmpaques/:id',eliminardesechableEmpaque)
router.patch('/desechablesEmpaques/:id',actualizardesechableEmpaque)

export default router