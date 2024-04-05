import mongoose from 'mongoose';
import {ProveedoresSchema} from '../models/proveedor.js';

const Proveedores = mongoose.model('Proveedores', ProveedoresSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaProveedores =async(req,res)=>{
    try{
        const proveedores = await Proveedores.find();
        res.json(proveedores)

    }catch (error){
        errorfn(res,'Error listando los proveedores')
    }
}

export const obtenerProveedores = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener proveedor:',id)
    try{
        const proveedor = await Proveedores.findById(id);
        res.json(proveedor)
    }catch (error){
        errorfn(res,'Error al buscar el proveedor')
    }
}

export const crearProveedor= async (req,res)=>{
    const proveedor= new Proveedores(req.body)
    try{
        const proveedorSalvado= await proveedor.save();
        res.status(200).json(proveedorSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear el proveedor')
    }
}

export const eliminarProveedor = async (req,res)=>{
    const {id} = req.params;
    try{
        const proveedorEliminado = await Proveedores.findByIdAndDelete(id);
        if(!proveedorEliminado)return res.status(404).json({
            message:'No se encontro proveedor para eliminar'
        })
        res.json(proveedorEliminado)
    }catch(error){
        errorfn(res,error.message||'Error al remover el proveedor')
    }
}

export const actualizarProveedor = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const proveedorAcualizado= await Proveedores.findByIdAndUpdate(id,req.body,{new:true})
        if(!proveedorAcualizado) res.status(404).json({
            message:'No se pudo actualizar el método para el proveedor'
        })
        res.json(proveedorAcualizado)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar el proveedor')
    }
}