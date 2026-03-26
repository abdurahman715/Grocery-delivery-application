import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

//Add product
export const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);

    let productData = JSON.parse(req.body.productData);
    console.log(productData);

    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        console.log(item.path);

        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });

        console.log(result);

        return result.secure_url;
      }),
    );

    console.log(imagesUrl);

    await Product.create({ ...productData, image: imagesUrl });

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//Get product
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
//Get single product
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
//Change product instock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
