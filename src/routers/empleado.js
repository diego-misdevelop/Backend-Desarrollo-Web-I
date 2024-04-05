import {Router} from "express";
import {listaEmpleados,obtenerEmpleados,crearEmpleado, eliminarEmpleado, actualizarEmpleado} from '../controllers/empleado.js'

const router= Router();

router.get('/empleados',listaEmpleados)
router.get('/empleados/:id',obtenerEmpleados)
router.post('/empleados',crearEmpleado)
router.delete('/empleados/:id',eliminarEmpleado)
router.patch('/empleados/:id',actualizarEmpleado)

export default router