import mongoose from 'mongoose';
import {ComestiblesSchema} from '../models/comestible.js';

const Comestibles = mongoose.model('Comestibles', ComestiblesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaComestibles =async(req,res)=>{
    try{
        const comestibles = await Comestibles.find();
        res.json(comestibles)

    }catch (error){
        errorfn(res,'Error listando los comestibles')
    }
}

export const obtenerComestible = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener comestible:',id)
    try{
        const comestible = await Comestibles.findById(id);
        res.json(comestible)
    }catch (error){
        errorfn(res,'Error al buscar el comestible')
    }
}

export const crearComestible = async (req,res)=>{
    const comestible= new Comestibles(req.body)
    try{
        const comestibleSalvado= await comestible.save();
        res.status(200).json(comestibleSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el comestible')
    }
}

export const eliminarComestible = async (req,res)=>{
    const {id} = req.params;
    try{
        const comestibleEliminado = await Comestibles.findByIdAndDelete(id);
        if(!comestibleEliminado)return res.status(404).json({
            message:'No se encontro comestible para eliminar'
        })
        res.json(comestibleEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el comestible')
    }
}

export const actualizarComestible = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const comestibleAcualizado= await Comestibles.findByIdAndUpdate(id,req.body,{new:true})
        if(!comestibleAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el comestible'
        })
        res.json(comestibleAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el comestible')
    }
}