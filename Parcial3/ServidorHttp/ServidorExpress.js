const express = require('express')
const app = express();

app.post('/', (req,res)=>{
    res.json({ respuesta:"Respuesta peticion get"})
})

app.get('/', (req,res)=>{
    res.json({ respuesta:"Respuesta peticion get"})
})

app.Listen(8802, ()=>{
    console.log('Servidor express escuchando en puerto 8802')
});