module.export =function(app,db){

app.post('/signup',(req,res)=>{

const data={text:req.body.body,title:req.body.title};
db.collection('registration').insert(data,(err,result)=>{

if(err){
    res.send({'error':'an error has occured'});    
}
else{
    res.send(result.ops[0]);
}
});
});

};