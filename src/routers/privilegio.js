import {Router} from "express";
import {listaPrivilegios,obtenerPrivilegio,crearPrivilegio} from '../controllers/privilegio.js'

const router= Router();

router.get('/privilegios',listaPrivilegios)
router.get('/privilegios/:_id',obtenerPrivilegio)
router.post('/privilegios',crearPrivilegio)

export default router