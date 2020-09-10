const express =require('express');
const router =express.Router();
//const Product =require('../module/product');
//const MongoClient = require('mongodb').MongoClient;
var connection =require('../database/connection');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET request to /product'
    });
});

router.post('/',(req,res,next)=>{
    // const product = new Product({
    //     _id :new MongoClient.Type.ObjectId(),
    //     name :req.body.name,
    //     price :req.body.price
    // });

    // product.save().then(result =>{
    //     console.log(result);
    // }).catch(err => console.log(err));


    res.status(201).json({
        message:'Handling POST request to /product',
        createdProduct: product
    });
});


router.get('/:productId',(req,res,next)=>{
    const id =req.params.productId;
    if(id ==='special'){
        res.status(200).json({
            message:'Your discovered the special ID',
            id:id
        });
    }else{
        res.status(200).json({
            message:'Your passed ID',
            id:id
        });

    }
    
});

router.patch('/:productId',(req,res,next)=>{
   
    res.status(200).json({
        message:'Updated Product',
        
    });
});

router.delete('/:productId',(req,res,next)=>{
   
    res.status(200).json({
        message:'Deleted Product',
       
    });
});



module.exports = router;