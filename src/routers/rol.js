import {Router} from "express";
import {listaRoles,obtenerRoles,crearRol, eliminarRol, actualizarRol} from '../controllers/rol.js'

const router= Router();

router.get('/roles',listaRoles)
router.get('/roles/:id',obtenerRoles)
router.post('/roles',crearRol)
router.delete('/roles/:id',eliminarRol)
router.patch('/roles/:id',actualizarRol)

export default router