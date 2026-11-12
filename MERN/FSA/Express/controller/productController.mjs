
import Product from "../model/productSchema.mjs";

// const dirname = path.resolve();
// const dataPath = './data.json';
// const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
// const products = data.products;

let getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Products:', products);

    res.status(200).json({
      message: 'Products fetched successfully',
      products: products
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
}

// let getProductById = async (req, res) => {
//   try {
//     const productId = parseInt(req.params.id);
//     const product = products.find(p => p.id === productId);

//     if (!product) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }

//     res.status(200).json({
//       message: 'Product fetched successfully',
//       product: product
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Internal server error'
//     });
//   }
// }

let create = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discountedPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    } = req.body;

    const product = new Product({
      title,
      description,
      price,
      discountedPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    });

    // mongoose method to save data to database
    const addProd = await product.save();
    // mongodb method to save data to database
    // let addProd = await Product.insertOne(product);

    console.log("Request Body:", req.body);
console.log("Content Type:", req.headers['content-type']);
    res.status(201).json({
      message: "Product created successfully",
      product: addProd
    });


  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};

const productController = {
  getProducts,
  // getProductById,
  create,
}

export default productController;