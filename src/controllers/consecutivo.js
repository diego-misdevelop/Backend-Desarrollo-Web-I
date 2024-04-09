import mongoose from 'mongoose';
import {ConsecutivosSchema} from '../models/consecutivo.js';

const Consecutivos = mongoose.model('Consecutivos', ConsecutivosSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaConsecutivos =async(req,res)=>{
    try{
        const consecutivos = await Consecutivos.find();
        res.json(consecutivos)

    }catch (error){
        errorfn(res,'Error listando los consecutivos')
    }
}

export const obtenerConsecutivos = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener consecutivo:',id)
    try{
        const consecutivo = await Consecutivos.findById(id);
        res.json(consecutivo)
    }catch (error){
        errorfn(res,'Error al buscar el consecutivo')
    }
}

export const crearConsecutivo = async (req,res)=>{
    const consecutivo= new Consecutivos(req.body)
    try{
        const consecutivoSalvado= await consecutivo.save();
        res.status(200).json(consecutivoSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el consecutivo')
    }
}

export const eliminarConsecutivo = async (req,res)=>{
    const {id} = req.params;
    try{
        const consecutivoEliminado = await Consecutivos.findByIdAndDelete(id);
        if(!consecutivoEliminado)return res.status(404).json({
            message:'No se encontro consecutivo para eliminar'
        })
        res.json(consecutivoEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el consecutivo')
    }
}

export const actualizarConsecutivo = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const consecutivoAcualizado= await Consecutivos.findByIdAndUpdate(id,req.body,{new:true})
        if(!consecutivoAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el consecutivo'
        })
        res.json(consecutivoAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el consecutivo')
    }
}