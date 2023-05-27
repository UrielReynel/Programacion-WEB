
const express = require('express');
const app = express ();
const mysql = require('mysql');

app.use (express.json());

app.get('/Juegos',(req,res)=> {
    console.log(req.query.idJuego);

    var connection = mysql.createConnection({
        host :'localhost',
        user :'root',
        password :'',
        database : 'ejemplo'
    });
    connection.connect();
    connection.query(`SELECT * from juegos where idJuego=${req.query.idJuego}`,function(error,results,fields){
    
        if(error) {
            res.json (error);   
        }else{
            if(results.lenght==0){
                res.json({mensaje:"Juego No encontrado"})
            }
            res.json (results);
        }
    });
    connection.end();
    
});

app.get('/Juegos/:idJuego',(req,res)=> {
    if(typeof(req.params.idJuego)=='undefined'){
        res.json({estado:0,
        resultado:"Debe enviar el parametro idJuego en la cadena de consulta "});
    }else{
        var connection = mysql.createConnection({
        host     :'localhost',
        user     :'root',
        password :'',
        database : 'ejemplo'
        });

        connection.connect();
        connection.query(`Delete * from juegos where idJuego=${req.query.idJuego}`,function(error,results,fields){
            if(error){
                res.json({estado:0,
                resultado:error,sqlManager});
            }else{
                res.json({estado:1,
                resultado:results[0]});
            }
        });
    }
})

app.post('/Juegos',(req,res)=> {
    console.log(req.body.numero)
    res.send('Servidor express contestando con peticion post')
})

app.listen(8082, () => {
    console.log('servidor express escuchando en puerto 8082')
})

