import mongoose from "mongoose";

const schema = mongoose.Schema;

export const UsuarioSchema = new schema({
    nombre:{
        type:String,
        require:"Por favor indique un nombre"
    },
    
    primerApellido:{
        type:String,
        require:"Por favor indique el primer apellido"
    },
    
    SegungoApellido:{
        type:String,
        require:"Por favor indique el segundo apellido"
    },
    
    telefono:{
        type:Number
    },
    
    usuario:{
        type:String
    },

    contrasena:{
        type:String
    },

    privilegio:{
        type:String
    }
})