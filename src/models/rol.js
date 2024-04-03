import mongoose from "mongoose";

const schema = mongoose.Schema;

export const RolesSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el rol"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del rol"
    },

    descripcion:{
        type:String,
        require:"Por favor indique la descripción"
    }

})