import mongoose from 'mongoose';
import {BebidasCalientesSchema} from '../models/bebidaCaliente.js';
import bcrypt from 'bcryptjs';

const BebidasCalientes = mongoose.model('BebidasCalientes', BebidasCalientesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaBebidasCalientes =async(req,res)=>{
    try{
        const bebidasCalientes = await BebidasCalientes.find();
        res.json(bebidasCalientes)

    }catch (error){
        errorfn(res,'Error listando las bebidas calientes')
    }
}

export const obtenerBebidaCaliente = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener bebida caliente:',id)
    try{
        const bebidaCaliente = await BebidasCalientes.findById(id);
        res.json(bebidaCaliente)
    }catch (error){
        errorfn(res,'Error al buscar la bebida caliente')
    }
}

export const crearBebidaCaliente = async (req,res)=>{
    const { codigo, nombre, precio, restaurante } = req.body;

    const hashedCodigo = await bcrypt.hash(codigo, 10);
    const hashedNombre = await bcrypt.hash(nombre, 10);
    const hashedPrecio = await bcrypt.hash(precio.toString(), 10); // Convertir a string antes de encriptar
    const hashedRestaurante = await bcrypt.hash(restaurante, 10);

    const bebidaCaliente = new BebidasCalientes({
        codigo: hashedCodigo,
        nombre: hashedNombre,
        precio: hashedPrecio,
        restaurante: hashedRestaurante
    });

    try {
        const bebidaCalienteGuardada = await bebidaCaliente.save();
        res.status(200).json(bebidaCalienteGuardada);
    } catch (error) {
        errorfn(res, error.message || 'Error al crear la bebida caliente');
    }
}

export const eliminarBebidaCaliente = async (req,res)=>{
    const {id} = req.params;
    try{
        const bebidaCalienteEliminada= await BebidasCalientes.findByIdAndDelete(id);
        if(!bebidaCalienteEliminada)return res.status(404).json({
            message:'No se encontro bebida para eliminar'
        })
        res.json(bebidaCalienteEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la bebida')
    }
}

export const actualizarBebidaCaliente = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const bebidaCalienteAcualizada= await BebidasCalientes.findByIdAndUpdate(id,req.body,{new:true})
        if(!bebidaCalienteAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la bebida caliente'
        })
        res.json(bebidaCalienteAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la bebida')
    }
}