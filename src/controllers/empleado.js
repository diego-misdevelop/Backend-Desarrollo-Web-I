import mongoose from 'mongoose';
import {EmpleadosSchema} from '../models/empleado.js';

const Empleados = mongoose.model('Empleados', EmpleadosSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaEmpleados =async(req,res)=>{
    try{
        const empleados = await Empleados.find();
        res.json(empleados)

    }catch (error){
        errorfn(res,'Error listando los empleados')
    }
}

export const obtenerEmpleados= async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener empleado:',_id)
    try{
        const empleado = await Empleados.findById(_id);
        res.json(empleado)
    }catch (error){
        errorfn(res,'Error al buscar el empleado')
    }
}

export const crearEmpleado= async (req,res)=>{
    const empleado= new Empleados(req.body)
    try{
        const empleadoSalvado= await empleado.save();
        res.status(200).json(empleadoSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el empleado')
    }
}