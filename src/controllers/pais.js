import mongoose from 'mongoose';
import {PaisesSchema} from '../models/pais.js';

const Paises = mongoose.model('Paises', PaisesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaPaises =async(req,res)=>{
    try{
        const paises = await Paises.find();
        res.json(paises)

    }catch (error){
        errorfn(res,'Error listando los paises')
    }
}

export const obtenerPaises= async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener país:',_id)
    try{
        const pais = await Paises.findById(_id);
        res.json(pais)
    }catch (error){
        errorfn(res,'Error al buscar el país')
    }
}

export const crearPais= async (req,res)=>{
    const pais= new Paises(req.body)
    try{
        const paisSalvado= await pais.save();
        res.status(200).json(paisSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el país')
    }
}