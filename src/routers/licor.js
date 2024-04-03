import {Router} from "express";
import {listaLicores,obtenerLicores,crearLicor} from '../controllers/licor.js'

const router= Router();

router.get('/licores',listaLicores)
router.get('/licores/:_id',obtenerLicores)
router.post('/licores',crearLicor)

export default router