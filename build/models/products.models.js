"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    nom: { type: String },
    description: { type: String },
    prix: { type: Number },
    spec: { type: Object },
    type: { type: String },
    subtype: { type: String },
    img: { type: String }
});
const ProductModel = mongoose_1.default.model('Product', productSchema);
exports.default = ProductModel;
