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
    const {_id}=req.params;
    console.log('obtener especialidad:',_id)
    try{
        const especialidad = await Especialidades.findById(_id);
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