const {  dbAddProduct } = require("../DAO/dbconnect");
const multer  = require('multer');
const { GridFsStorage } = require("multer-gridfs-storage");

const url = "mongodb+srv://sxp17390:root123@cluster0.6bf1a1k.mongodb.net/grocerySystem?retryWrites=true&w=majority";

// Create storage engine for GridFS
const storage = new GridFsStorage({
  url,
  file: (req, file) => {
    return {
      bucketName: 'uploads'
    };
  }
});
const ImageUpload = multer({ storage });

async function addProduct(productData) {
  const { description,img,price,quantity,timestamp,title,company  } = productData
  console.log("add product page : ",{...productData})
  const data = await dbAddProduct(productData)
  .then( (data) => data)
  .catch(data => null);
  return data;
}

module.exports = {
  addProduct,
  ImageUpload
}