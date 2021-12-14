const express = require('express');
const router = express.Router();
const Cart = require('../models/shoppingCart_model');
const Product = require('../models/product_model');

router.get('/add.to-cart:id?', 
function(req,res) {
    const foodId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product,product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })

});

router.get('/cart/remove/:id',
function (req,res,next){
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/cart', function (req,res,next){
    if(!req.session.cart){
        return res.render('/cart', {products: null});
    }
    const cart = new Cart(req.session.cart);
    return res.render('/cart', {products: cart.getProducts(), totalPrice: cart.totalPrice});
})

module.exports = router;