import mongoose from 'mongoose';
import {UsuarioSchema} from '../models/usuario.js';

const Usuarios = mongoose.model('Usuarios', UsuarioSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaUsuarios =async(req,res)=>{
    try{
        const usuarios = await Usuarios.find();
        res.json(usuarios)

    }catch (error){
        errorfn(res,'Error listando los usuarios')
    }
}

export const obtenerUsuario= async (req,res)=>{
    const {_id}=req.params;
    console.log('obtener usuario:',_id)
    try{
        const usuario = await Usuarios.findById(_id);
        res.json(usuario)
    }catch (error){
        errorfn(res,'Error al buscar el usuario')
    }
}

export const crearUsuario= async (req,res)=>{
    const usuario= new Usuarios(req.body)
    try{
        const usuarioSalvado= await usuario.save();
        res.status(200).json(usuarioSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el usuario')
    }
}