import {Router} from "express";
import {listaEspecialidades,obtenerEspecialidad,crearEspecialidad} from '../controllers/especialidad.js'

const router= Router();

router.get('/especialidades',listaEspecialidades)
router.get('/especialidades/:_id',obtenerEspecialidad)
router.post('/especialidades',crearEspecialidad)

export default router