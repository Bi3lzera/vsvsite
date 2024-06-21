import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  imgSrc: {
    type: String,
    require: String,
  },
  fileKey: {
    type: String,
    require: String,
  },
  name: {
    type: String,
    require: String,
  },
  category: {
    type: String,
    require: String,
  },
  price: {
    type: String,
    require: String,
  },
});

const Product = models.Product || model("Product", productSchema);

export default Product;
