const productController = require('../controller/product.controller');

module.exports = (app)=>{
    app.post('/admin/addProducts', productController.addProducts);
}