import mongoose from "mongoose";

const schema = mongoose.Schema;

export const RestaurantesSchema = new schema({
    
    codigo:{
        type:String,
        require:"Por favor indique el código"
    },
    
    nombre:{
        type:String,
        require:"Por favor indique el nombre del restaurante"
    },

    especialidad:{
        type:String
    },

    direccion:{
        type:String
    },

    telefono:{
        type:Number
    },

    estado:{
        type:String
    }
})