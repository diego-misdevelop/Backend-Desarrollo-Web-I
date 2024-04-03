import {Router} from "express";
import {listaMarcas,obtenerMarca,crearMarca} from '../controllers/marca.js'

const router= Router();

router.get('/marcas',listaMarcas)
router.get('/marcas/:_id',obtenerMarca)
router.post('/marcas',crearMarca)

export default router