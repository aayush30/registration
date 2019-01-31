module.export =function(app,db){

    app.get('/login:id',(req,res)=>{
    const id =req.params.id;
    const details={ 'id': new objectId(id)};
    db.collection('registration').findOne(details,(err,item)=>{
    
    if(err){
        res.send({'error':'an error has occured'});    
    }
    else{
        res.send(item);
    }
    });
    });
    
    };