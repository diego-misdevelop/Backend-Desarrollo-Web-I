import mongoose from 'mongoose';
import {TecnologiasSchema} from '../models/tecnologia.js';

const Tecnologias = mongoose.model('Tecnologias', TecnologiasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaTecnologias =async(req,res)=>{
    try{
        const tecnologias = await Tecnologias.find();
        res.json(tecnologias)

    }catch (error){
        errorfn(res,'Error listando las tecnologias')
    }
}

export const obtenerTecnologia = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener tecnología:',id)
    try{
        const tecnologia = await Tecnologias.findById(id);
        res.json(tecnologia)
    }catch (error){
        errorfn(res,'Error al buscar la tecnología')
    }
}

export const crearTecnologia = async (req,res)=>{
    const tecnologia= new Tecnologias(req.body)
    try{
        const tecnologiaSalvado= await tecnologia.save();
        res.status(200).json(tecnologiaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la tecnología')
    }
}

export const eliminarTecnologia = async (req,res)=>{
    const {id} = req.params;
    try{
        const tecnologiaEliminada = await Tecnologias.findByIdAndDelete(id);
        if(!tecnologiaEliminada)return res.status(404).json({
            message:'No se encontro tecnología para eliminar'
        })
        res.json(tecnologiaEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la tecnología')
    }
}

export const actualizarTecnologia = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const tecnologiaAcualizada = await Tecnologias.findByIdAndUpdate(id,req.body,{new:true})
        if(!tecnologiaAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la tecnología'
        })
        res.json(tecnologiaAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la tecnología')
    }
}