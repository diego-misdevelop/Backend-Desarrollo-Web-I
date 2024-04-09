import {Router} from "express";
import {listaLimpiezaHigiene,obtenerLimpiezaHigiene,crearLimpiezaHigiene, eliminarLimpiezaHigiene, actualizarLimpiezaHigiene} from '../controllers/limpiezaHigiene.js'

const router= Router();

router.get('/limpiezaHigiene',listaLimpiezaHigiene)
router.get('/limpiezaHigiene/:id',obtenerLimpiezaHigiene)
router.post('/limpiezaHigiene',crearLimpiezaHigiene)
router.delete('/limpiezaHigiene/:id',eliminarLimpiezaHigiene)
router.patch('/limpiezaHigiene/:id',actualizarLimpiezaHigiene)

export default router