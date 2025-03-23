
const mongooseDb = require('../db/mongoose'); 

const schema = new mongooseDb.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 2,
      unique: true,
      trim: true,
		},
		description: {
			type: String, 
			maxlength: 1000
	  }, 
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
); 

module.exports = mongooseDb.model('Category', schema)