import {Router} from "express";
import {listaVinos,obtenerVino,crearVino, eliminarVino, actualizarVino} from '../controllers/vino.js'

const router= Router();

router.get('/vinos',listaVinos)
router.get('/vinos/:id',obtenerVino)
router.post('/vinos',crearVino)
router.delete('/vinos/:id',eliminarVino)
router.patch('/vinos/:id',actualizarVino)

export default router