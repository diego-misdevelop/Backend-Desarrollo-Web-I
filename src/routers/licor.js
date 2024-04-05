import {Router} from "express";
import {listaLicores,obtenerLicores,crearLicor, eliminarLicor, actualizarLicor} from '../controllers/licor.js'

const router= Router();

router.get('/licores',listaLicores)
router.get('/licores/:id',obtenerLicores)
router.post('/licores',crearLicor)
router.delete('/licores/:id',eliminarLicor)
router.patch('/licores/:id',actualizarLicor)

export default router