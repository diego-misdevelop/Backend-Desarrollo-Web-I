import {Router} from "express";
import {listaUsuarios,obtenerUsuario,crearUsuario} from '../controllers/usuario.js'

const router= Router();

router.get('/usuarios',listaUsuarios)
router.get('/Usuarios/:_id',obtenerUsuario)
router.post('/usuarios',crearUsuario)

export default router