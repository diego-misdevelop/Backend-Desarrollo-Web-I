import mongoose from 'mongoose';
import {EspecialidadesSchema} from '../models/especialidad.js';

const Especialidades = mongoose.model('Especialidades', EspecialidadesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaEspecialidades =async(req,res)=>{
    try{
        const especialidades = await Especialidades.find();
        res.json(especialidades)

    }catch (error){
        errorfn(res,'Error listando las especialidades')
    }
}

export const obtenerEspecialidad = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener especialidad:',id)
    try{
        const especialidad = await Especialidades.findById(id);
        res.json(especialidad)
    }catch (error){
        errorfn(res,'Error al buscar la especialidad')
    }
}

export const crearEspecialidad = async (req,res)=>{
    const especialidad = new Especialidades(req.body)
    try{
        const especialidadSalvado= await especialidad.save();
        res.status(200).json(especialidadSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la especialidad')
    }
}

export const eliminarEspecialidad = async (req,res)=>{
    const {id} = req.params;
    try{
        const especialidadEliminada = await Especialidades.findByIdAndDelete(id);
        if(!especialidadEliminada)return res.status(404).json({
            message:'No se encontro especialidad para eliminar'
        })
        res.json(especialidadEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la especialidad')
    }
}

export const actualizarEspecialidad = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const especialidadAcualizada = await Especialidades.findByIdAndUpdate(id,req.body,{new:true})
        if(!especialidadAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la especialidad'
        })
        res.json(especialidadAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la especialidad')
    }
}