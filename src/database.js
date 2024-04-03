import mongoose from "mongoose";

(async()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/restaurante')
    .then(()=>console.log('Base de datos conectada.......'))
    .catch(err=>console.log('Error en la conexión a la base de datos', err))
})()