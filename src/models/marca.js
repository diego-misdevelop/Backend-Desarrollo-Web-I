import mongoose from "mongoose";

const schema = mongoose.Schema;

export const MarcasSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre de la marca"
    },

    descripcion:{
        type:String
    },

    nacionalidad:{
        type:String
    },
    
    empresa:{
        type:String,
        require:"Por favor indique la empresa"
    },

    telefono:{
        type:Number
    }


})