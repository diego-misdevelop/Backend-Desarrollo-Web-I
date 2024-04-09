import mongoose from "mongoose";

const schema = mongoose.Schema;

export const ConsecutivosSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    descripcion:{
        type:String
    },

    valorConsecutivo:{
        type:Number
    }
})