const BaseController = require("./BaseController");
const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");
const ManufacturerModel = require("../models/manufacturer");

class ProductController extends BaseController {
  constructor(model) {
    super(model);
  }

  // перезапись с основного контроллера
  async getyById(req, res, next) {
    const id = req.params.id;

    try {
      const product = await ProductModel.findById(id).exec(),
        manufacturer = await ManufacturerModel.findById(product.manufacturer),
        category = await CategoryModel.findById(product.category);

      let requestedProduct = {
        ...product.toObject(),
        category: {
          id: category._id,
          title: category.title,
        },
        manufacturer: {
          id: manufacturer._id,
          title: manufacturer.title,
        },
		};
		
		console.log(requestedProduct)

      res.status(200).json(requestedProduct);
    } catch (err) {
      return next(err);
    }
  }

  async createProduct(req, res, next) {
    try {
      console.log(req.body);
      let productInstance = new ProductModel(req.body);

      await productInstance.save();

      res.status(201).json({ message: "Product was created" });
    } catch (err) {
      return res.status(400).json({ message: "Произошла ошибка" });
    }
  }

  async updateProduct(req, res, next) {
    const id = req.params.id;

    try {
      

      await ProductModel.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });

      await res.status(200).json({ message: "Данные обновлены" });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new ProductController(ProductModel);
