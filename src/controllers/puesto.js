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
    const {id}=req.params;
    console.log('obtener puesto:',id)
    try{
        const puesto = await Puestos.findById(id);
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

export const eliminarPuesto = async (req,res)=>{
    const {id} = req.params;
    try{
        const puestoEliminado = await Puestos.findByIdAndDelete(id);
        if(!puestoEliminado)return res.status(404).json({
            message:'No se encontro puesto para eliminar'
        })
        res.json(puestoEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el puesto')
    }
}

export const actualizarPuesto = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const puestoAcualizado= await Puestos.findByIdAndUpdate(id,req.body,{new:true})
        if(!puestoAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el puesto'
        })
        res.json(puestoAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el puesto')
    }
}