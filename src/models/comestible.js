import mongoose from "mongoose";

const schema = mongoose.Schema;

export const ComestiblesSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre de la marca"
    },

    cantidad:{
        type:Number,
        require:"Por favor indique la cantidad"
    },

    tipo:{
        type:String,
        require:"Por favor indique el tipo"
    },

    restaurante:{
        type:String,
        require:"Por favor indique el restaurante"
    },

    marca:{
        type:String,
        require:"Por favor indique la marca"
    }

})