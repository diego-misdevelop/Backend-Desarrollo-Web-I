import {Router} from "express";
import {listaProveedores,obtenerProveedores,crearProveedor, eliminarProveedor, actualizarProveedor} from '../controllers/proveedor.js'

const router= Router();

router.get('/proveedores',listaProveedores)
router.get('/proveedores/:id',obtenerProveedores)
router.post('/proveedores',crearProveedor)
router.delete('/proveedores/:id',eliminarProveedor)
router.patch('/proveedores/:id',actualizarProveedor)

export default router