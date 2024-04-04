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
    const {_id}=req.params;
    console.log('obtener gaseosa:',_id)
    try{
        const gaseosa = await Gaseosas.findById(_id);
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