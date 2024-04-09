import {Router} from "express";
import {listaConsecutivos,obtenerConsecutivos,crearConsecutivo, eliminarConsecutivo, actualizarConsecutivo} from '../controllers/consecutivo.js'

const router= Router();

router.get('/consecutivos',listaConsecutivos)
router.get('/consecutivos/:id',obtenerConsecutivos)
router.post('/consecutivos',crearConsecutivo)
router.delete('/consecutivos/:id',eliminarConsecutivo)
router.patch('/consecutivos/:id',actualizarConsecutivo)

export default router