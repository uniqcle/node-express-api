const ManufacturerModel = require("../models/manufacturer");

const manufacturerRouter = require("express").Router();

manufacturerRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let manufacturerInstance = new ManufacturerModel(req.body);

    await manufacturerInstance.save();

    res.status(201).json({ message: "Manufacturer was created" });
  } catch (err) {
    return res.status(400).json({ message: "Произошла ошибка" });
  }
});

manufacturerRouter.get('/:id', async (req, res, next) => {
	const id = req.params.id;

	try {
		const manufacturer = await ManufacturerModel.findById(id).exec();
		
		res.status(200).json(manufacturer)
	} catch (err) {
		return next(err)
	}
}); 


manufacturerRouter.put('/:id', async (req, res, next) => {
	const id = req.params.id;

	try {
		await ManufacturerModel.findByIdAndUpdate(id, req.body, {
			runValidators: true,
		});
		await res.status(200).json({ message: 'Данные обновлены' })

	} catch (err) {
		return next(err)
	}
}); 


manufacturerRouter.delete('/:id', async (req, res, next) => {
	const id = req.params.id;

	try {
		await ManufacturerModel.findByIdAndDelete(id);

		await res.json({ message: "Производитель удален" });
		
	} catch (err) {
		return next(err)
	}
})



module.exports = manufacturerRouter;
