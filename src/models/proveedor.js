import mongoose from "mongoose";

const schema = mongoose.Schema;

export const ProveedoresSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del proveedor"
    },

    ingreso:{
        type:String
    },

    correo:{
        type:String,
        require:"Por favor indique el correo"
    },

    telefono:{
        type:Number,
        require:"Por favor indique el teléfono"
    },

    direccion:{
        type:String,
        require:"Por favor indique la dirección del proveedor"
    }
})