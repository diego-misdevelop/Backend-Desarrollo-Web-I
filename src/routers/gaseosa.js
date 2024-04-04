import {Router} from "express";
import {listaGaseosas,obtenerGaseosa,crearGaseosa} from '../controllers/gaseosa.js'

const router= Router();

router.get('/gaseosas',listaGaseosas)
router.get('/gaseosas/:_id',obtenerGaseosa)
router.post('/gaseosas',crearGaseosa)

export default router