import {Router} from "express";
import {listaPuestos,obtenerPuestos,crearPuesto, eliminarPuesto, actualizarPuesto} from '../controllers/puesto.js'

const router= Router();

router.get('/puestos',listaPuestos)
router.get('/puestos/:id',obtenerPuestos)
router.post('/puestos',crearPuesto)
router.delete('/puestos/:id',eliminarPuesto)
router.patch('/puestos/:id',actualizarPuesto)

export default router