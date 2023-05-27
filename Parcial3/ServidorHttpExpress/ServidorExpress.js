const express = require('express')
const app = express();

app.use(express.json());

// app.get('/usuarios', (req.res) => {
//     console.log(req.query.IdUsuario);
//     res.json((peticion:"get"));
// })

app.post('/usuarios', (req,res)=>{
    console.log(req.query);
    // res.send('Peticion get a / usuarios'+req.query.nombreusuario);
    res.json({peticion:"get",nombre:req.query.nombreusuario})
})

app.get('/usuarios', (req,res)=>{
    console.log(req.body.numero);
    res.send('Servidor Express contestando a PeticionPost');
})

app.Listen(8082, ()=>{
    console.log('Servidor express escuchando en puerto 8802')
});