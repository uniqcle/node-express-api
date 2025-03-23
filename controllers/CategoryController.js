const CategoryModel = require("../models/category");
const BaseController = require("./BaseController");

class CategoryController extends BaseController {
  constructor(model) {
    super(model);
  }

  async createCategory(req, res, next) {
    try {
      console.log(req.body);
      let categoryInstance = new CategoryModel(req.body);

      await categoryInstance.save();

      res.status(201).json({ message: "Category was created" });
    } catch (err) {
      return res.status(400).json({ message: "Произошла ошибка" });
    }
  }

  async updateCategory(req, res, next) {
    const id = req.params.id;

    try {
      await this.model.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });
      await res.status(200).json({ message: "Данные обновлены" });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new CategoryController(CategoryModel);