const express = require('express');
const routerApi= require('./routes/index');

const port= process.env.PORT || 4000;
const app = express();
routerApi(app);
app.get('/', (req,res,next)=>{
    res.send('hola mi server en express');
});

app.get('/nueva-ruta',(req,res)=>{
    res.send('soy la nueva ruta');
});


app.listen(port, ()=>{
    console.log(`Aplicacion corriendo en el puerto: ${port}`)
});