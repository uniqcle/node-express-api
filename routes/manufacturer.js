const manufacturerRouter = require("express").Router();
const manufacturerController = require("../controllers/ManufacturerController");

manufacturerRouter.get("/all", manufacturerController.getAll);

manufacturerRouter.get("/:id", manufacturerController.getyById);

manufacturerRouter.post("/", manufacturerController.createManufacturer);

manufacturerRouter.put("/:id", manufacturerController.updateManufacturer);

manufacturerRouter.delete("/:id", manufacturerController.deleteById);

module.exports = manufacturerRouter;
