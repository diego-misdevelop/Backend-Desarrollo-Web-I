import {Router} from "express";
import {listaMarcas,obtenerMarca,crearMarca, eliminarMarca, actualizarMarca} from '../controllers/marca.js'

const router= Router();

router.get('/marcas',listaMarcas)
router.get('/marcas/:id',obtenerMarca)
router.post('/marcas',crearMarca)
router.delete('/marcas/:id',eliminarMarca)
router.patch('/marcas/:id',actualizarMarca)

export default router