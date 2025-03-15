
const mongooseDb = require('mongoose'); 

mongooseDb.connect(
	process.env.DB_CONNECT + process.env.DB_NAME + "?authSource=admin"
); 

module.exports = mongooseDb; 