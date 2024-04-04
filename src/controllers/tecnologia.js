import mongoose from 'mongoose';
import {TecnologiasSchema} from '../models/tecnologia.js';

const Tecnologias = mongoose.model('Tecnologias', TecnologiasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaTecnologias =async(req,res)=>{
    try{
        const tecnologias = await Tecnologias.find();
        res.json(tecnologias)

    }catch (error){
        errorfn(res,'Error listando las tecnologias')
    }
}

export const obtenerTecnologia = async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener tecnología:',_id)
    try{
        const tecnologia = await Tecnologias.findById(_id);
        res.json(tecnologia)
    }catch (error){
        errorfn(res,'Error al buscar la tecnología')
    }
}

export const crearTecnologia = async (req,res)=>{
    const tecnologia= new Tecnologias(req.body)
    try{
        const tecnologiaSalvado= await tecnologia.save();
        res.status(200).json(tecnologiaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la tecnología')
    }
}