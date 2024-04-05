import {Router} from "express";
import {listaEspecialidades,obtenerEspecialidad,crearEspecialidad, eliminarEspecialidad, actualizarEspecialidad} from '../controllers/especialidad.js'

const router= Router();

router.get('/especialidades',listaEspecialidades)
router.get('/especialidades/:id',obtenerEspecialidad)
router.post('/especialidades',crearEspecialidad)
router.delete('/especialidades/:id',eliminarEspecialidad)
router.patch('/especialidades/:id',actualizarEspecialidad)

export default router