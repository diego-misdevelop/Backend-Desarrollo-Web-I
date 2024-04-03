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
    const {_id}=req.params;
    console.log('obtener roles:',_id)
    try{
        const rol = await Roles.findById(_id);
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