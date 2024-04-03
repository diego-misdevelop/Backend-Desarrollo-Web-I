import {Router} from "express";
import {listaPuestos,obtenerPuestos,crearPuesto} from '../controllers/puesto.js'

const router= Router();

router.get('/puestos',listaPuestos)
router.get('/puestos/:_id',obtenerPuestos)
router.post('/puestos',crearPuesto)

export default router