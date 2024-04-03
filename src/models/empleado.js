import mongoose from "mongoose";

const schema = mongoose.Schema;

export const EmpleadosSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del empleado"
    },

    primerApellido:{
        type:String,
        require:"Por favor indique el primer apellido del empleado"
    },

    segundoApellido:{
        type:String,
        require:"Por favor indique el segundo apellido del empleado"
    },

    cedula:{
        type:String,
        require:"Por favor indique la cédula"
    },

    telefono:{
        type:Number,
        require:"Por favor indique el telefono del empleado"
    },

    puesto:{
        type:String,
        require:"Por favor indique el puesto del empleado"
    },

    nacionalidad:{
        type:String,
        require:"Por favor indique la nacionalidad del empleado"
    },

    restaurante:{
        type:String,
        require:"Por favor indique el restaurante al que pertenece"
    },

})