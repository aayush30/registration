
const express     = require('express');
const MongoClient =require('mongodb').MongoClient;
const bodyParser  =require('body-parser');
const db          =require('./config/db');
const mongoose    =require('mongoose');
const app =express();

const port=8000;
app.use(bodyParser.urlencoded({extended:true}))

// mongoose.connect(db.url,(err,database)=>{
//     if(err)return console.log(err)
//     require('./app/routes')(app,{});
//     app.listen(port,() =>{
//         console.log('we are on  port live ');
//     })
//     } ,
//     { useNewUrlParser: true }
//   )



MongoClient.connect(db.url,(err,database)=>{
    if(err)return console.log(err)
    require('./app/routes')(app,{});
    app.listen(port,() =>{
        console.log('we are on  port live ');
    })
    })
