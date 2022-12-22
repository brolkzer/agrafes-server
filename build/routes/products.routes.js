"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_controllers_1 = require("../controllers/products.controllers");
function productsRoutes(app) {
    app.get('/api/products', products_controllers_1.getAllProducts);
    app.get('/api/products/type/:type', products_controllers_1.getProductsByType);
    app.get('/api/products/subtype/:subtype', products_controllers_1.getProductsBySubtype);
    app.get('/api/product/:id', products_controllers_1.getProductById);
    app.get('/api/product/random', products_controllers_1.getRandomProduct);
}
exports.default = productsRoutes;
