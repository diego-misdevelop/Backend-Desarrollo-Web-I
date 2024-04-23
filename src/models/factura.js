import mongoose from "mongoose";

const schema = mongoose.Schema;

export const FacturasSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del cliente"
    },

    producto:{
        type:String
    },

    cantidad:{
        type:Number
    },

    total:{
        type:Number
    }
})