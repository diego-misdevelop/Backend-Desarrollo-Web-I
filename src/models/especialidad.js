import mongoose from "mongoose";

const schema = mongoose.Schema;

export const EspecialidadesSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre de la especialidad"
    },

    ingredientes:{
        type:String,
        require:"Por favor indique los ingredientes"
    },

    precio:{
        type:Number,
        require:"Por favor indique el precio"
    },

    descripcion:{
        type:String,
        require:"Por favor indique la descripcion"
    }
})