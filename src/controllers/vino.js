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
    const {id}=req.params;
    console.log('obtener vino:',id)
    try{
        const vino = await Vinos.findById(id);
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

export const eliminarVino = async (req,res)=>{
    const {id} = req.params;
    try{
        const vinoEliminado = await Vinos.findByIdAndDelete(id);
        if(!vinoEliminado)return res.status(404).json({
            message:'No se encontro vino para eliminar'
        })
        res.json(vinoEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el vino')
    }
}

export const actualizarVino = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const vinoAcualizada = await Vinos.findByIdAndUpdate(id,req.body,{new:true})
        if(!vinoAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para el vino'
        })
        res.json(vinoAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el vino')
    }
}