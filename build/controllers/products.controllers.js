"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getRandomProduct = exports.getProductsBySubtype = exports.getProductsByType = exports.getAllProducts = void 0;
const products_models_1 = __importDefault(require("../models/products.models"));
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield products_models_1.default.find();
            if (!products)
                return res.status(404).json('Products not found');
            else if (products)
                return res.status(200).json(products);
        }
        catch (error) {
            console.log('Could not get PRODUCTS' + error);
            return res.status(404).json(error.message);
        }
    });
}
exports.getAllProducts = getAllProducts;
function getProductsByType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield products_models_1.default.find({ type: req.params.type });
            if (!product)
                return res.status(404).json('Product not found');
            else if (product)
                return res.status(200).json(product);
        }
        catch (error) {
            console.log('Could not get PRODUCT' + error);
            return res.status(404).json(error.message);
        }
    });
}
exports.getProductsByType = getProductsByType;
function getProductsBySubtype(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield products_models_1.default.find({ subtype: req.params.subtype });
            if (!product)
                return res.status(404).json('Product not found');
            else if (product)
                return res.status(200).json(product);
        }
        catch (error) {
            console.log('Could not get PRODUCT' + error);
            return res.status(404).json(error.message);
        }
    });
}
exports.getProductsBySubtype = getProductsBySubtype;
function getRandomProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield products_models_1.default.find();
            if (!products)
                return res.status(404).json('Products not found');
            else if (products)
                return res.status(200).json(products[Math.floor(Math.random() * (products.length - 1))]);
        }
        catch (error) {
            console.log('Could not get PRODUCT' + error);
            return res.status(404).json(error.message);
        }
    });
}
exports.getRandomProduct = getRandomProduct;
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield products_models_1.default.find({ _id: req.params.id });
            if (!product)
                return res.status(404).json('Product not found');
            else if (product)
                return res.status(200).json(product);
        }
        catch (error) {
            console.log('Could not get PRODUCT' + error);
            return res.status(404).json(error.message);
        }
    });
}
exports.getProductById = getProductById;
