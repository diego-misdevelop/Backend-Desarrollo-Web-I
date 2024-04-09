import mongoose from 'mongoose';
import {DesechablesEmpaquesSchema} from '../models/desechableEmpaque.js';

const DesechablesEmpaques = mongoose.model('DesechablesEmpaques', DesechablesEmpaquesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaDesechablesEmpaques =async(req,res)=>{
    try{
        const desechableEmpaque = await DesechablesEmpaques.find();
        res.json(desechableEmpaque)

    }catch (error){
        errorfn(res,'Error listando los desechables de empaques')
    }
}

export const obtenerDesechableEmpaque = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener desechable de empaque:',id)
    try{
        const desechableEmpaque = await DesechablesEmpaques.findById(id);
        res.json(desechableEmpaque)
    }catch (error){
        errorfn(res,'Error al buscar el desechable de empaque')
    }
}

export const creardesechableEmpaque = async (req,res)=>{
    const desechableEmpaque= new DesechablesEmpaques(req.body)
    try{
        const desechableEmpaqueSalvado= await desechableEmpaque.save();
        res.status(200).json(desechableEmpaqueSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el desechable de empaque')
    }
}

export const eliminardesechableEmpaque = async (req,res)=>{
    const {id} = req.params;
    try{
        const desechableEmpaqueEliminado = await DesechablesEmpaques.findByIdAndDelete(id);
        if(!desechableEmpaqueEliminado)return res.status(404).json({
            message:'No se encontro desechable de empaque para eliminar'
        })
        res.json(desechableEmpaqueEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el desechable de empaque')
    }
}

export const actualizardesechableEmpaque = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const desechableEmpaqueAcualizado= await DesechablesEmpaques.findByIdAndUpdate(id,req.body,{new:true})
        if(!desechableEmpaqueAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el desechable de empaque'
        })
        res.json(desechableEmpaqueAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el desechable de empaque')
    }
}