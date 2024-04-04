import mongoose from 'mongoose';
import {BebidasCalientesSchema} from '../models/bebidaCaliente.js';

const BebidasCalientes = mongoose.model('BebidasCalientes', BebidasCalientesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaBebidasCalientes =async(req,res)=>{
    try{
        const bebidasCalientes = await BebidasCalientes.find();
        res.json(bebidasCalientes)

    }catch (error){
        errorfn(res,'Error listando las bebidas calientes')
    }
}

export const obtenerBebidaCaliente = async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener bebida caliente:',_id)
    try{
        const bebidaCaliente = await BebidasCalientes.findById(_id);
        res.json(bebidaCaliente)
    }catch (error){
        errorfn(res,'Error al buscar la bebida caliente')
    }
}

export const crearBebidaCaliente = async (req,res)=>{
    const bebidaCaliente= new BebidasCalientes(req.body)
    try{
        const bebidaCalienteSalvado= await bebidaCaliente.save();
        res.status(200).json(bebidaCalienteSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la bebida caliente')
    }
}