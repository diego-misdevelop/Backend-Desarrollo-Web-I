import {Router} from "express";
import {listaComestibles,obtenerComestible,crearComestible, eliminarComestible, actualizarComestible} from '../controllers/comestible.js'

const router= Router();

router.get('/comestibles',listaComestibles)
router.get('/comestibles/:id',obtenerComestible)
router.post('/comestibles',crearComestible)
router.delete('/comestibles/:id',eliminarComestible)
router.patch('/comestibles/:id',actualizarComestible)

export default router