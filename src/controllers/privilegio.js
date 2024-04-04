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
    const {_id}=req.params;
    console.log('obtener privilegio:',_id)
    try{
        const privilegio = await Privilegios.findById(_id);
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