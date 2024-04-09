import {Router} from "express";
import {listaRestaurantes,obtenerRestaurantes,crearRestaurante, eliminarRestaurante, actualizarRestaurante} from '../controllers/restaurante.js'

const router= Router();

router.get('/restaurantes',listaRestaurantes)
router.get('/restaurantes/:id',obtenerRestaurantes)
router.post('/restaurantes',crearRestaurante)
router.delete('/restaurantes/:id',eliminarRestaurante)
router.patch('/restaurantes/:id',actualizarRestaurante)

export default router