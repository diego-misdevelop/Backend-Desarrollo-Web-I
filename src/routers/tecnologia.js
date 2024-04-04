import {Router} from "express";
import {listaTecnologias,obtenerTecnologia,crearTecnologia} from '../controllers/tecnologia.js'

const router= Router();

router.get('/tecnologias',listaTecnologias)
router.get('/tecnologias/:_id',obtenerTecnologia)
router.post('/tecnologias',crearTecnologia)

export default router