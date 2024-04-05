import {Router} from "express";
import {listaPrivilegios,obtenerPrivilegio,crearPrivilegio, eliminarPrivilegio, actualizarPrivilegios} from '../controllers/privilegio.js'

const router= Router();

router.get('/privilegios',listaPrivilegios)
router.get('/privilegios/:id',obtenerPrivilegio)
router.post('/privilegios',crearPrivilegio)
router.delete('/privilegios/:id',eliminarPrivilegio)
router.patch('/privilegios/:id',actualizarPrivilegios)

export default router