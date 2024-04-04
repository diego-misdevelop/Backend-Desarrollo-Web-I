import mongoose from "mongoose";

const schema = mongoose.Schema;

export const GaseosasSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre de la gaseosa"
    },

    precio:{
        type:Number,
        require:"Por favor indique el precio"
    },

    restaurante:{
        type:String,
        require:"Por favor indique el restaurante"
    }
})