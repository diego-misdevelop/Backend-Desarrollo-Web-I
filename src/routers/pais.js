import {Router} from "express";
import {listaPaises,obtenerPaises,crearPais, eliminarPais, actualizarPais} from '../controllers/pais.js'

const router= Router();

router.get('/paises',listaPaises)
router.get('/paises/:id',obtenerPaises)
router.post('/paises',crearPais)
router.delete('/paises/:id',eliminarPais)
router.patch('/paises/:id',actualizarPais)

export default router