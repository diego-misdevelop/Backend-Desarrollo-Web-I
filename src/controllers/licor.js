import mongoose from 'mongoose';
import {LicoresSchema} from '../models/licor.js';

const Licores = mongoose.model('Licores', LicoresSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaLicores =async(req,res)=>{
    try{
        const licores = await Licores.find();
        res.json(licores)

    }catch (error){
        errorfn(res,'Error listando los licores')
    }
}

export const obtenerLicores = async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener licor:',_id)
    try{
        const licor = await Licores.findById(_id);
        res.json(licor)
    }catch (error){
        errorfn(res,'Error al buscar el licor')
    }
}

export const crearLicor= async (req,res)=>{
    const licor= new Licores(req.body)
    try{
        const licorSalvado= await licor.save();
        res.status(200).json(licorSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el licor')
    }
}