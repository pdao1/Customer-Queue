const mongoose = require('mongoose')

const CustomerQueueSchema = new mongoose.Schema({
	_id: { type: Number, required: false },
	location: { type: String, required: false},
	name: { type: String, required: false},
	services: { type: Array, required: false},
	time: { type: String, required: false},
});
	module.exports = mongoose.model('CustomerQueue', CustomerQueueSchema);

		