import {Router} from "express";
import {listaGaseosas,obtenerGaseosa,crearGaseosa, eliminarGaseosa, actualizarGaseosa} from '../controllers/gaseosa.js'

const router= Router();

router.get('/gaseosas',listaGaseosas)
router.get('/gaseosas/:id',obtenerGaseosa)
router.post('/gaseosas',crearGaseosa)
router.delete('/gaseosas/:id',eliminarGaseosa)
router.patch('/gaseosas/:id',actualizarGaseosa)

export default router