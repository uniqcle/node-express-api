const ManufacturerModel = require("../models/manufacturer");
const BaseController = require("./BaseController");

class ManufacturerController extends BaseController {
  constructor(model) {
    super(model);
  }

  async createManufacturer(req, res, next) {
    try {
      console.log(req.body);
      let manufacturerInstance = new ManufacturerModel(req.body);

      await manufacturerInstance.save();

      res.status(201).json({ message: "Manufacturer was created" });
    } catch (err) {
      return res.status(400).json({ message: "Произошла ошибка" });
    }
  }

  async updateManufacturer(req, res, next) {
    const id = req.params.id;

    try {
      await ManufacturerModel.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });
      await res.status(200).json({ message: "Данные обновлены" });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new ManufacturerController(ManufacturerModel);