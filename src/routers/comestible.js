import {Router} from "express";
import {listaComestibles,obtenerComestible,crearComestible} from '../controllers/comestible.js'

const router= Router();

router.get('/comestibles',listaComestibles)
router.get('/comestibles/:_id',obtenerComestible)
router.post('/comestibles',crearComestible)

export default router