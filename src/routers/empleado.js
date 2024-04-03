import {Router} from "express";
import {listaEmpleados,obtenerEmpleados,crearEmpleado} from '../controllers/empleado.js'

const router= Router();

router.get('/empleados',listaEmpleados)
router.get('/empleados/:_id',obtenerEmpleados)
router.post('/empleados',crearEmpleado)

export default router