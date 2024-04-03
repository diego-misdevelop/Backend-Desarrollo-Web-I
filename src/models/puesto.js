import mongoose from "mongoose";

const schema = mongoose.Schema;

export const PuestosSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del puesto"
    },

    rol:{
        type:String,
        require:"Por favor indique el rol del puesto"
    }
})