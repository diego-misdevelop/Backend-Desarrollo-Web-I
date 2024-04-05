import mongoose from 'mongoose';
import {GaseosasSchema} from '../models/gaseosa.js';

const Gaseosas = mongoose.model('Gaseosas', GaseosasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaGaseosas =async(req,res)=>{
    try{
        const gaseosas = await Gaseosas.find();
        res.json(gaseosas)

    }catch (error){
        errorfn(res,'Error listando las gaseosas')
    }
}

export const obtenerGaseosa = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener gaseosa:',id)
    try{
        const gaseosa = await Gaseosas.findById(id);
        res.json(gaseosa)
    }catch (error){
        errorfn(res,'Error al buscar la gaseosa')
    }
}

export const crearGaseosa = async (req,res)=>{
    const gaseosa = new Gaseosas(req.body)
    try{
        const gaseosaSalvado= await gaseosa.save();
        res.status(200).json(gaseosaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la gaseosa')
    }
}

export const eliminarGaseosa = async (req,res)=>{
    const {id} = req.params;
    try{
        const gaseosaEliminada = await Gaseosas.findByIdAndDelete(id);
        if(!gaseosaEliminada)return res.status(404).json({
            message:'No se encontro gaseosa para eliminar'
        })
        res.json(gaseosaEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la gaseosa')
    }
}

export const actualizarGaseosa = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const gaseosaAcualizada= await Gaseosas.findByIdAndUpdate(id,req.body,{new:true})
        if(!gaseosaAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la gaseosa'
        })
        res.json(gaseosaAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la gaseosa')
    }
}