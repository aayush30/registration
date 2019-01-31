const mainRoute1= require('./signup');
const mainRoute2= require('./login');

module.export =function(app,db){
    mainRoute1(app,db);
    mainRoute2(app,db);
    
}