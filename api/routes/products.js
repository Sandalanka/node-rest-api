const express =require('express');
const router =express.Router();

var connection =require('../database/connection');

router.get('/',(req,res,next)=>{
connection.query("SELECT *FROM  product ",function(err ,row){
    if(err) throw err;
    res.status(200).json({
        message:'All product',
        data :row
    });
    });
});

router.post('/',(req,res,next)=>{
    const product ={
        name :req.body.name,
        price :req.body.price,
    };
    connection.query("INSERT INTO product SET?",product,function(err,result){
        if(err) throw err;
        
        res.status(201).json({
            message:'Product Add successfully',
            createdProduct: result
        });
    });
});


router.get('/:productId',(req,res,next)=>{
    const id =req.params.productId;
        connection.query("SELECT*FROM product WHERE id=?",[id],function(err,result){
            if(err) throw err;
            
            res.status(200).json({
                message:'Your Product',
                id:result
            });
        });
    
});

router.patch('/:productId',(req,res,next)=>{
    var id=req.params.productId;
    var name =req.body.name;
    var price =req.body.price;
    connection.query("UPDATE product SET name=?,price=? WHERE id=?",[name,price,id],function(err,result){
        if(err) throw err;
        res.status(200).json({
            message:'Updated Product Successfully',
            result :result
            
        });
    });
});

router.delete('/:productId',(req,res,next)=>{
    var id =req.params.productId;
    connection.query("DELETE FROM product WHERE id=?",[id],function(err,result){
        if(err) throw err;
        res.status(200).json({
            message:'Deleted Product Successfully',
            result:result
        });


    });
});



module.exports = router;