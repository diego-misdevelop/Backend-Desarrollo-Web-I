import { login } from '../controllers/login.js';
import {Router} from "express";
import {listaUsuarios,obtenerUsuario,crearUsuario, eliminarUsuario, actualizarUsuario} from '../controllers/usuario.js'


const router= Router();

router.get('/usuarios',listaUsuarios)
router.get('/Usuarios/:id',obtenerUsuario)
router.post('/usuarios',crearUsuario)
router.delete('/usuarios/:id',eliminarUsuario)
router.patch('/usuarios/:id',actualizarUsuario)
router.post('/login', login);

export default router;