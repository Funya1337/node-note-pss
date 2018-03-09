var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
	note : String
});

module.exports = mongoose.model('Note', noteSchema);
