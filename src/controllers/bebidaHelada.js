import mongoose from 'mongoose';
import {BebidasHeladasSchema} from '../models/bebidaHelada.js';

const BebidasHeladas = mongoose.model('BebidasHeladas', BebidasHeladasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaBebidasHeladas =async(req,res)=>{
    try{
        const bebidasHeladas = await BebidasHeladas.find();
        res.json(bebidasHeladas)

    }catch (error){
        errorfn(res,'Error listando las bebidas heladas')
    }
}

export const obtenerBebidaHelada = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener bebida helada:',id)
    try{
        const bebidaHelada = await BebidasHeladas.findById(id);
        res.json(bebidaHelada)
    }catch (error){
        errorfn(res,'Error al buscar la bebida helada')
    }
}

export const crearBebidaHelada = async (req,res)=>{
    const bebidaHelada= new BebidasHeladas(req.body)
    try{
        const bebidaHeladaSalvado= await bebidaHelada.save();
        res.status(200).json(bebidaHeladaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la bebida helada')
    }
}

export const eliminarBebidaHelada = async (req,res)=>{
    const {id} = req.params;
    try{
        const bebidaHeladaEliminada = await BebidasHeladas.findByIdAndDelete(id);
        if(!bebidaHeladaEliminada)return res.status(404).json({
            message:'No se encontro bebida para eliminar'
        })
        res.json(bebidaHeladaEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la bebida')
    }
}

export const actualizarBebidaHelada = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const bebidaHeladaAcualizada= await BebidasHeladas.findByIdAndUpdate(id,req.body,{new:true})
        if(!bebidaHeladaAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la bebida helada'
        })
        res.json(bebidaHeladaAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la bebida')
    }
}