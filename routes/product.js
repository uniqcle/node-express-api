const productRouter = require("express").Router();
const productController = require("../controllers/ProductController");

productRouter.get("/all", productController.getAll);

productRouter.get("/:id", productController.getyById);

productRouter.post("/", productController.createProduct );

productRouter.put("/:id", productController.updateProduct );

productRouter.delete("/:id", productController.deleteById);

module.exports = productRouter;
