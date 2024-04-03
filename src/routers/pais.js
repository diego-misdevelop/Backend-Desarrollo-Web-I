import {Router} from "express";
import {listaPaises,obtenerPaises,crearPais} from '../controllers/pais.js'

const router= Router();

router.get('/paises',listaPaises)
router.get('/paises/:_id',obtenerPaises)
router.post('/paises',crearPais)

export default router