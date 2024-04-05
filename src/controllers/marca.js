import mongoose from 'mongoose';
import {MarcasSchema} from '../models/marca.js';

const Marcas = mongoose.model('Marcas', MarcasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaMarcas =async(req,res)=>{
    try{
        const marcas = await Marcas.find();
        res.json(marcas)

    }catch (error){
        errorfn(res,'Error listando las marcas')
    }
}

export const obtenerMarca = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener marca:',id)
    try{
        const marca = await Marcas.findById(id);
        res.json(marca)
    }catch (error){
        errorfn(res,'Error al buscar la marca')
    }
}

export const crearMarca = async (req,res)=>{
    const marca = new Marcas(req.body)
    try{
        const marcaSalvado= await marca.save();
        res.status(200).json(marcaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la marca')
    }
}

export const eliminarMarca = async (req,res)=>{
    const {id} = req.params;
    try{
        const marcaEliminada = await Marcas.findByIdAndDelete(id);
        if(!marcaEliminada)return res.status(404).json({
            message:'No se encontro marca para eliminar'
        })
        res.json(marcaEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la marca')
    }
}

export const actualizarMarca = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const marcaAcualizada= await Marcas.findByIdAndUpdate(id,req.body,{new:true})
        if(!marcaAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la marca'
        })
        res.json(marcaAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la marcas')
    }
}