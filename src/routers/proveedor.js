import {Router} from "express";
import {listaProveedores,obtenerProveedores,crearProveedor} from '../controllers/proveedor.js'

const router= Router();

router.get('/proveedores',listaProveedores)
router.get('/proveedores/:_id',obtenerProveedores)
router.post('/proveedores',crearProveedor)

export default router