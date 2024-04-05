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
    const {id}=req.params;
    console.log('obtener empleado:',id)
    try{
        const empleado = await Empleados.findById(id);
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

export const eliminarEmpleado = async (req,res)=>{
    const {id} = req.params;
    try{
        const empleadoEliminado = await Empleados.findByIdAndDelete(id);
        if(!empleadoEliminado)return res.status(404).json({
            message:'No se encontro empleado para eliminar'
        })
        res.json(empleadoEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el empleado')
    }
}

export const actualizarEmpleado = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const empleadoAcualizado= await Empleados.findByIdAndUpdate(id,req.body,{new:true})
        if(!empleadoAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el empleado'
        })
        res.json(empleadoAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el empleado')
    }
}