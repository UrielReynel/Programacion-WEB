
let http = require('http');

let servidor = http.createServer(function(req,res){
    res.write('servidor HTTP y contestando rapido');   //Escribir Respuesta
    res.end();                                         //Finalizar Respuesta
})

servidor.listen(8081,()=>{ console.log('Servidor http listo')});  //Servidor escuchando en puerto 8081