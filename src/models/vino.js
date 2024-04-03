import mongoose from "mongoose";

const schema = mongoose.Schema;

export const VinosSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del vino"
    },

    marca:{
        type:String,
        require:"Por favor indique la marca"
    },

    precioBotella:{
        type:Number,
        require:"Por favor indique el precio del vino"
    },

    precioUnitario:{
        type:Number,
        require:"Por favor indique el precio unitario"
    },

    nacionalidad:{
        type:String
    },

    anio:{
        type:Number
    },
    
    restaurante:{
        type:String,
        require:"Por favor indique el restaurante"
    }


})