import mongoose from 'mongoose';
import {VinosSchema} from '../models/vino.js';

const Vinos = mongoose.model('Vinos', VinosSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaVinos =async(req,res)=>{
    try{
        const vinos = await Vinos.find();
        res.json(vinos)

    }catch (error){
        errorfn(res,'Error listando los vinos')
    }
}

export const obtenerVino = async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener vino:',_id)
    try{
        const vino = await Vinos.findById(_id);
        res.json(vino)
    }catch (error){
        errorfn(res,'Error al buscar el vino')
    }
}

export const crearVino = async (req,res)=>{
    const vino= new Vinos(req.body)
    try{
        const vinoSalvado= await vino.save();
        res.status(200).json(vinoSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el vino')
    }
}