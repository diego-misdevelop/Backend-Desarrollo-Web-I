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
    const {_id}=req.params;
    console.log('obtener bebida helada:',_id)
    try{
        const bebidaHelada = await BebidasHeladas.findById(_id);
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