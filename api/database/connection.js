var MongoClient = require('mongodb').MongoClient;


//database connect
connection =MongoClient.connect("mongodb://localhost:27017/node-rest-shop", function (err, db) {
   
     if(err) throw err;
    console.log("Database Connected");
     //Write databse Insert/Update/Query code here..
                
});


module.exports =connection;