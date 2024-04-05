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
    const {id}=req.params;
    console.log('obtener usuario:',id)
    try{
        const usuario = await Usuarios.findById(id);
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

export const eliminarUsuario = async (req,res)=>{
    const {id} = req.params;
    try{
        const usuarioEliminado = await Usuarios.findByIdAndDelete(id);
        if(!usuarioEliminado)return res.status(404).json({
            message:'No se encontro usuario para eliminar'
        })
        res.json(usuarioEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el usuario')
    }
}

export const actualizarUsuario = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const usuarioAcualizada = await Usuarios.findByIdAndUpdate(id,req.body,{new:true})
        if(!usuarioAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para el usuario'
        })
        res.json(usuarioAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el usuario')
    }
}