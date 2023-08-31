const cartController = require('../controller/cart.controller');

module.exports = (app)=>{
    app.post('/cart/addToCart/:_id', cartController.addToCart);
    app.get('/cart/cartItems', cartController.getCartItem);
    app.post('/cart/removeItem/:_id', cartController.removeFromCart);
    // app.delete('/removeCart', );
}