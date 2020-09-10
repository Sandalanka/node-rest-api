const express =require('express');
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'All Order is GET'
    });
});

router.get('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message:'One Order Details GET',
        id :req.params.orderID
    });
});

router.post('/',(req,res,next)=>{
    const order ={
        productId :req.body.productId,
        quantity :req.body.quantity
    };
    res.status(201).json({
        message:'Order is Add',
        order :order
       
    });
});


router.delete('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message:'Order is Deleted',
        id :req.params.orderID
       
    });
});

module.exports = router;