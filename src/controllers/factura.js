import mongoose from 'mongoose';
import {FacturasSchema} from '../models/factura.js';

const Facturas = mongoose.model('Facturas', FacturasSchema);

const errorfn=(res,m)=>{
    res.status(500).json({
        mensaje:m
    })
}

export const listaFacturas =async(req,res)=>{
    try{
        const facturas = await Facturas.find();
        res.json(facturas)

    }catch (error){
        errorfn(res,'Error listando las facturas')
    }
}

export const obtenerFactura = async (req,res)=>{
    const {id}=req.params;
    console.log('obtener factura:',id)
    try{
        const factura = await Facturas.findById(id);
        res.json(factura)
    }catch (error){
        errorfn(res,'Error al buscar la factura')
    }
}

export const crearFactura = async (req,res)=>{
    const factura = new Facturas(req.body)
    try{
        const facturaSalvado= await factura.save();
        res.status(200).json(facturaSalvado);
    }catch(error){
        errorfn(res,error.message||'Error al crear la factura')
    }
}

export const eliminarFactura = async (req,res)=>{
    const {id} = req.params;
    try{
        const facturaEliminada = await Facturas.findByIdAndDelete(id);
        if(!facturaEliminada)return res.status(404).json({
            message:'No se encontro factura para eliminar'
        })
        res.json(facturaEliminada)
    }catch(error){
        errorfn(res,error.message||'Error al remover la factura')
    }
}

export const actualizarFactura = async (req,res)=>{
    const {id} = req.params;
    if(!req.body) return res.status(404).json({
        message: 'Los datos para actualizar fueron enviados'
    })
    try{
        const facturaAcualizada = await Facturas.findByIdAndUpdate(id,req.body,{new:true})
        if(!facturaAcualizada) res.status(404).json({
            message:'No se pudo actualizar el método para la factura'
        })
        res.json(facturaAcualizada)
    }catch(error){
        errorfn(res,error.message||'Error al actualizar la factura')
    }
}