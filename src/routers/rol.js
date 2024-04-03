import {Router} from "express";
import {listaRoles,obtenerRoles,crearRol} from '../controllers/rol.js'

const router= Router();

router.get('/roles',listaRoles)
router.get('/roles/:_id',obtenerRoles)
router.post('/roles',crearRol)

export default router