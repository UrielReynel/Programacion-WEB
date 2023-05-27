
const e = require('express');
const express = require('express');
const app = express ();
const mysql = require('mysql');

app.use (express.json());

app.get('/Juegos/:idJuego',(req,res)=> {
    console.log(req.params.idJuego);
//CONSULTA
    var connection = mysql.createConnection({
        host :'localhost',
        user :'root',
        password :'',
        database : 'ejemplo'
    });
    connection.connect();
    connection.query(`SELECT * from juegos where idJuego=${req.params.idJuego}`,function(error,results,fields){
    
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

app.delete('/Juegos/:idJuego',(req,res)=> {
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
        connection.query(`Delete  from juegos where idJuego=${req.params.idJuego}`,function(error,results,fields){
            if(error) {
                res.json ({estado:0,
                    resultado:error.sqlMessage});
            } else {
                if(results.affectedRows == 1) {
                    res.json({ estado:1,
                        resultado:"Juego Borrado"});
                } else {
                    res.json({ estado: 0,
                        resultado :"Ocurrio un error por la eliminación"});
                }
            }
        });
    }
})

app.post('/Juegos/:idJuego',(req,res)=> {
    console.log(req.params.idJuego);

    var connection = mysql.createConnection({
        host :'localhost',
        user :'root',
        password :'',
        database : 'ejemplo'
    });
    console.log(req.body);
    res.json(req.body);

    connection.connect();

    let sentencialSql = "Insert into Juego Value("+req.body.idJuego+","+
    ""+req.body.nombre +","+
    ""+req.body.clasificacion +","+
    ""+req.body.genero +","+
    ""+req.body.precio +""+")";

    console.log(sentencialSql);
    // res.json(req.body);

    connection.connect();
    connection.query(sentencialSql,function(error,results,fields){
        if(error){
            res.json(error);
        } else {
            console.log(results);
            res.json(results);
        }
    })
    connection.end();
    
});

app.post('/Juegos',(req,res)=> {
    console.log(req.body.numero)
    res.send('Servidor express contestando con peticion post')
})

app.listen(8082, () => {
    console.log('servidor express escuchando en puerto 8082')
})

