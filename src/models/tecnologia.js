import mongoose from "mongoose";

const schema = mongoose.Schema;

export const TecnologiasSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre de la tecnología"
    },

    marca:{
        type:String,
        require:"Por favor indique la marca"
    },

    restaurante:{
        type:String,
        require:"Por favor indique el restaurante"
    },

    cantidad:{
        type:Number,
        require:"Por favor indique la cantidad"
    },

    descripcion:{
        type:String,
        require:"Por favor indique la descripción"
    }

})