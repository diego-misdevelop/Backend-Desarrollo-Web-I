import server from './server.js'
import './database.js'

server.listen(8082,()=>{
    console.log('Esta corriendo en la siguiente ruta: http://localhost:8082');
})

