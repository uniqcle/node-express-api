class BaseController {
  constructor(model) {
	  this.model = model;
	  
	  this.getAll = this.getAll.bind(this); 
	  this.getyById = this.getyById.bind(this); 
	  this.deleteById = this.deleteById.bind(this); 
	  
  }

  async getAll(req, res, next) {
    try {
      const entity = await this.model.find({}).exec();

      res.status(200).json(entity);
    } catch (err) {
      return next(err);
    }
  }

  async getyById(req, res, next) {
    const id = req.params.id;

    try {
      const entity = await this.model.findById(id).exec();

      res.status(200).json(entity);
    } catch (err) {
      return next(err);
    }
  }

  async deleteById(req, res, next) {
    const id = req.params.id;

    try {
      await this.model.findByIdAndDelete(id);

      await res.json({ message: "Производитель удален" });
    } catch (err) {
      return next(err);
    }
  }
}


module.exports = BaseController; 