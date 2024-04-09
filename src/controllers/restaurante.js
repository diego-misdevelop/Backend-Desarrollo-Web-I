import mongoose from 'mongoose';
import {RestaurantesSchema} from '../models/restaurante.js';

const Restaurantes = mongoose.model('Restaurantes', RestaurantesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaRestaurantes =async(req,res)=>{
    try{
        const restaurantes = await Restaurantes.find();
        res.json(restaurantes)

    }catch (error){
        errorfn(res,'Error listando los restaurantes')
    }
}

export const obtenerRestaurantes = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener restaurante:',id)
    try{
        const restaurante = await Restaurantes.findById(id);
        res.json(restaurante)
    }catch (error){
        errorfn(res,'Error al buscar el restaurante')
    }
}

export const crearRestaurante = async (req,res)=>{
    const restaurante= new Restaurantes(req.body)
    try{
        const restauranteSalvado= await restaurante.save();
        res.status(200).json(restauranteSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el restaurante')
    }
}

export const eliminarRestaurante = async (req,res)=>{
    const {id} = req.params;
    try{
        const restauranteEliminado = await Restaurantes.findByIdAndDelete(id);
        if(!restauranteEliminado)return res.status(404).json({
            message:'No se encontro restaurante para eliminar'
        })
        res.json(restauranteEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el restaurante')
    }
}

export const actualizarRestaurante = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const restauranteAcualizado= await Restaurantes.findByIdAndUpdate(id,req.body,{new:true})
        if(!restauranteAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el restaurante'
        })
        res.json(restauranteAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el restaurante')
    }
}