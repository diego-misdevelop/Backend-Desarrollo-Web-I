import {Router} from "express";
import {listaVinos,obtenerVino,crearVino} from '../controllers/vino.js'

const router= Router();

router.get('/vinos',listaVinos)
router.get('/vinos/:_id',obtenerVino)
router.post('/vinos',crearVino)

export default router