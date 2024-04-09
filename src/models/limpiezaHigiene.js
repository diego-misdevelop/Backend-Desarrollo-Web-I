import mongoose from "mongoose";

const schema = mongoose.Schema;

export const LimpiezaHigieneSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },

    nombre:{
        type:String
    },

    restaurante:{
        type:String
    },

    marca:{
        type:String
    },

    cantidad:{
        type:Number
    },

    descripcion:{
        type:String
    }
})