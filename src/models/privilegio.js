import mongoose from "mongoose";

const schema = mongoose.Schema;

export const PrivilegiosSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del privilegio"
    }
})