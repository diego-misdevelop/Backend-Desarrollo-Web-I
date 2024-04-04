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
    const {_id}=req.params;
    console.log('obtener comestible:',_id)
    try{
        const comestible = await Comestibles.findById(_id);
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