import mongoose from 'mongoose';
import {MarcasSchema} from '../models/marca.js';

const Marcas = mongoose.model('Marcas', MarcasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaMarcas =async(req,res)=>{
    try{
        const marcas = await Marcas.find();
        res.json(marcas)

    }catch (error){
        errorfn(res,'Error listando las marcas')
    }
}

export const obtenerMarca = async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener marca:',_id)
    try{
        const marca = await Marcas.findById(_id);
        res.json(marca)
    }catch (error){
        errorfn(res,'Error al buscar la marca')
    }
}

export const crearMarca = async (req,res)=>{
    const marca = new Marcas(req.body)
    try{
        const marcaSalvado= await marca.save();
        res.status(200).json(marcaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la marca')
    }
}