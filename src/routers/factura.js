import {Router} from "express";
import {listaFacturas,obtenerFactura,crearFactura, eliminarFactura, actualizarFactura} from '../controllers/factura.js'

const router= Router();

router.get('/facturas',listaFacturas)
router.get('/facturas/:id',obtenerFactura)
router.post('/facturas',crearFactura)
router.delete('/facturas/:id',eliminarFactura)
router.patch('/facturas/:id',actualizarFactura)

export default router