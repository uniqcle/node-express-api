const categoryRouter = require("express").Router();
const categoryController = require("../controllers/CategoryController");

categoryRouter.get("/all", categoryController.getAll);

categoryRouter.get("/:id", categoryController.getyById);

categoryRouter.post("/", categoryController.createCategory);

categoryRouter.put("/:id", categoryController.updateCategory);

categoryRouter.delete("/:id", categoryController.deleteById);

module.exports = categoryRouter;
