import mongoose from "mongoose";

const schema = mongoose.Schema;

export const LicoresSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del licor"
    },

    marca:{
        type:String,
        require:"Por favor indique la marca"
    },

    precioBotella:{
        type:Number,
        require:"Por favor indique el precio de la botella"
    },

    precioUnitario:{
        type:Number,
        require:"Por favor indique el precio unitario"
    },

    nacionalidad:{
        type:String
    },
    
    restaurante:{
        type:String,
        require:"Por favor indique el restaurante"
    }


})