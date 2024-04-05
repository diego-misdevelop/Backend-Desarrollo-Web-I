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
    const {id}=req.params;
    console.log('obtener país:',id)
    try{
        const pais = await Paises.findById(id);
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

export const eliminarPais = async (req,res)=>{
    const {id} = req.params;
    try{
        const paisEliminado = await Paises.findByIdAndDelete(id);
        if(!paisEliminado)return res.status(404).json({
            message:'No se encontro país para eliminar'
        })
        res.json(paisEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el país')
    }
}

export const actualizarPais = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const paisAcualizado= await Paises.findByIdAndUpdate(id,req.body,{new:true})
        if(!paisAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el país'
        })
        res.json(paisAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el país')
    }
}