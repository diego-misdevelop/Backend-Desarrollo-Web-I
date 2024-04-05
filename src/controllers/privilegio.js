import mongoose from 'mongoose';
import {PrivilegiosSchema} from '../models/privilegio.js';

const Privilegios = mongoose.model('Privilegios', PrivilegiosSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaPrivilegios =async(req,res)=>{
    try{
        const privilegios = await Privilegios.find();
        res.json(privilegios)

    }catch (error){
        errorfn(res,'Error listando los privilegios')
    }
}

export const obtenerPrivilegio = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener privilegio:',id)
    try{
        const privilegio = await Privilegios.findById(id);
        res.json(privilegio)
    }catch (error){
        errorfn(res,'Error al buscar el privilegio')
    }
}

export const crearPrivilegio = async (req,res)=>{
    const privilegio= new Privilegios(req.body)
    try{
        const privilegioSalvado= await privilegio.save();
        res.status(200).json(privilegioSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el privilegio')
    }
}

export const eliminarPrivilegio = async (req,res)=>{
    const {id} = req.params;
    try{
        const privilegioEliminado = await Privilegios.findByIdAndDelete(id);
        if(!privilegioEliminado)return res.status(404).json({
            message:'No se encontro privilegio para eliminar'
        })
        res.json(privilegioEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el privilegio')
    }
}

export const actualizarPrivilegios = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const privilegioAcualizado= await Privilegios.findByIdAndUpdate(id,req.body,{new:true})
        if(!privilegioAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el privilegio'
        })
        res.json(privilegioAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el privilegio')
    }
}