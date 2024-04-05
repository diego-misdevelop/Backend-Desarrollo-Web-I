import {Router} from "express";
import {listaTecnologias,obtenerTecnologia,crearTecnologia, eliminarTecnologia, actualizarTecnologia} from '../controllers/tecnologia.js'

const router= Router();

router.get('/tecnologias',listaTecnologias)
router.get('/tecnologias/:id',obtenerTecnologia)
router.post('/tecnologias',crearTecnologia)
router.delete('/tecnologias/:id',eliminarTecnologia)
router.patch('/tecnologias/:id',actualizarTecnologia)

export default router