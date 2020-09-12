var mysql = require('mysql');
var db;
var setting= {
     host: "localhost",
     user: "root",
     password: "",
     database: "node-rest-api"
};

function dbconnection(){
     if(!db){
          db=mysql.createConnection(setting);
          db.connect(function(err){
          if(!err){
               console.log('Database Connected');
          }else{
               console.log('Error Database Connection');
          }
     })
     }
     return db;
}

module.exports =dbconnection();