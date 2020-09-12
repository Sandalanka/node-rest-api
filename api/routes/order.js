const express =require('express');
const router =express.Router();
var connection =require('../database/connection');

router.get('/',(req,res,next)=>{
    connection.query("SELECT *FROM new ",function(err ,row){
        if(err) throw err;

        res.status(200).json({
            message:'Your All Order',
            data :row
        });
        });
    });

router.get('/:orderID',(req,res,next)=>{
    const id =req.params.orderID;
    connection.query("SELECT*FROM new  WHERE id=?",[id],function(err,result){
        if(err) throw err;
        
        res.status(200).json({
            message:'Your Select Order',
            id:result
        });
    });
});

router.post('/',(req,res,next)=>{
    const order ={
        productId :req.body.productId,
        quantity :req.body.quantity
    };
    connection.query("INSERT INTO new SET?",order,function(err,result){
        if(err) throw err;
        res.status(201).json({
            message:'Order Add Successfully',
            createdProduct: result
        });
    });
});


router.delete('/:orderID',(req,res,next)=>{
    var id =req.params.orderID;
    connection.query("DELETE FROM new WHERE id=?",[id],function(err,result){
        if(err) throw err;
        res.status(200).json({
            message:'Deleted Order Successfully',
            result:result
        });
    });
});

module.exports = router;