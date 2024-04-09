import mongoose from 'mongoose';
import {LimpiezaHigieneSchema} from '../models/limpiezaHigiene.js';

const LimpiezaHigiene = mongoose.model('LimpiezaHigiene', LimpiezaHigieneSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaLimpiezaHigiene =async(req,res)=>{
    try{
        const limpiezaHigiene = await LimpiezaHigiene.find();
        res.json(limpiezaHigiene)

    }catch (error){
        errorfn(res,'Error listando los desechables de empaques')
    }
}

export const obtenerLimpiezaHigiene = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener limpieza higiene:',id)
    try{
        const LimpiezaHigiene = await LimpiezaHigiene.findById(id);
        res.json(LimpiezaHigiene)
    }catch (error){
        errorfn(res,'Error al buscar limpieza higiene')
    }
}

export const crearLimpiezaHigiene = async (req,res)=>{
    const limpiezaHigiene= new LimpiezaHigiene(req.body)
    try{
        const limpiezaHigieneSalvado= await limpiezaHigiene.save();
        res.status(200).json(limpiezaHigieneSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear limpieza higiene')
    }
}

export const eliminarLimpiezaHigiene = async (req,res)=>{
    const {id} = req.params;
    try{
        const limpiezaHigieneEliminado = await LimpiezaHigiene.findByIdAndDelete(id);
        if(!limpiezaHigieneEliminado)return res.status(404).json({
            message:'No se encontro limpieza higiene para eliminar'
        })
        res.json(limpiezaHigieneEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el desechable de empaque')
    }
}

export const actualizarLimpiezaHigiene = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const limpiezaHigieneAcualizado= await LimpiezaHigiene.findByIdAndUpdate(id,req.body,{new:true})
        if(!limpiezaHigieneAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para limpieza higiene'
        })
        res.json(limpiezaHigieneAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar limpieza higiene')
    }
}