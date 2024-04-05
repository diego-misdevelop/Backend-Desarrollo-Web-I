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
    const {id}=req.params;
    console.log('obtener licor:',id)
    try{
        const licor = await Licores.findById(id);
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

export const eliminarLicor = async (req,res)=>{
    const {id} = req.params;
    try{
        const licorEliminado = await Licores.findByIdAndDelete(id);
        if(!licorEliminado)return res.status(404).json({
            message:'No se encontro licor para eliminar'
        })
        res.json(licorEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el licor')
    }
}

export const actualizarLicor = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const licorAcualizada= await Licores.findByIdAndUpdate(id,req.body,{new:true})
        if(!licorAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para el licor'
        })
        res.json(licorAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el licor')
    }
}