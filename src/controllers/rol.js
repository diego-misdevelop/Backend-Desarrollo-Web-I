import mongoose from 'mongoose';
import {RolesSchema} from '../models/rol.js';

const Roles = mongoose.model('Roles', RolesSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaRoles =async(req,res)=>{
    try{
        const roles = await Roles.find();
        res.json(roles)

    }catch (error){
        errorfn(res,'Error listando los roles')
    }
}

export const obtenerRoles = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener roles:',id)
    try{
        const rol = await Roles.findById(id);
        res.json(rol)
    }catch (error){
        errorfn(res,'Error al buscar el rol')
    }
}

export const crearRol = async (req,res)=>{
    const rol= new Roles(req.body)
    try{
        const rolSalvado= await rol.save();
        res.status(200).json(rolSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el rol')
    }
}

export const eliminarRol = async (req,res)=>{
    const {id} = req.params;
    try{
        const rolEliminado = await Roles.findByIdAndDelete(id);
        if(!rolEliminado)return res.status(404).json({
            message:'No se encontro rol para eliminar'
        })
        res.json(rolEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el rol')
    }
}

export const actualizarRol = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const rolAcualizado= await Roles.findByIdAndUpdate(id,req.body,{new:true})
        if(!rolAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el rol'
        })
        res.json(rolAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el rol')
    }
}