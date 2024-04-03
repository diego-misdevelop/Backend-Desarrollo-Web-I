import express from 'express';
import usuario from './routers/usuario.js'
import pais from './routers/pais.js'
import puesto from './routers/puesto.js'
import empleado from './routers/empleado.js'
import proveedor from './routers/proveedor.js'
import rol from './routers/rol.js'
import licor from './routers/licor.js'
import vino from './routers/vino.js'
import marca from './routers/marca.js'

const app=express();

app.use(express.json());

app.get('/index',(req,res)=>{
    res.json({id:1,name:'Diego Corrales'})
})

app.use(usuario);
app.use(pais);
app.use(puesto);
app.use(empleado);
app.use(proveedor);
app.use(rol);
app.use(licor);
app.use(vino);
app.use(marca);

export default app;