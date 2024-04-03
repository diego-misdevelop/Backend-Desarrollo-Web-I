import mongoose from 'mongoose';
import {PuestosSchema} from '../models/puesto.js';

const Puestos = mongoose.model('Puestos', PuestosSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaPuestos =async(req,res)=>{
    try{
        const puestos = await Puestos.find();
        res.json(puestos)

    }catch (error){
        errorfn(res,'Error listando los puestos')
    }
}

export const obtenerPuestos= async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener puesto:',_id)
    try{
        const puesto = await Puestos.findById(_id);
        res.json(puesto)
    }catch (error){
        errorfn(res,'Error al buscar el puesto')
    }
}

export const crearPuesto= async (req,res)=>{
    const puesto= new Puestos(req.body)
    try{
        const puestoSalvado= await puesto.save();
        res.status(200).json(puestoSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el puesto')
    }
}