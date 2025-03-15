
const mongooseDb = require('../db/mongoose'); 

const schema = new mongooseDb.Schema({
	title: {
		type: String,
		required: true,
		maxlength: 255,
		minlength: 2,
		unique: true,
		trim: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
}); 

module.exports = mongooseDb.model('Manufacturer', schema)