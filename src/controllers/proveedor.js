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
    const {_id}=req.params;
    console.log('obtener proveedor:',_id)
    try{
        const proveedor = await Proveedores.findById(_id);
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