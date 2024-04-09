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
import comestible from './routers/comestible.js'
import tecnologia from './routers/tecnologia.js'
import privilegio from './routers/privilegio.js'
import especialidad from './routers/especialidad.js'
import gaseosa from './routers/gaseosa.js'
import bebidaCaliente from './routers/bebidaCaliente.js'
import bebidaHelada from './routers/bebidaHelada.js'
import consecutivo from './routers/consecutivo.js'
import restaurante from './routers/restaurante.js'
import desechableEmpaque from './routers/desechableEmpaque.js'
import limpiezaHigiene from './routers/limpiezaHigiene.js'

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
app.use(comestible);
app.use(tecnologia);
app.use(privilegio);
app.use(especialidad);
app.use(gaseosa);
app.use(bebidaCaliente);
app.use(bebidaHelada);
app.use(consecutivo);
app.use(restaurante);
app.use(desechableEmpaque);
app.use(limpiezaHigiene)

export default app;