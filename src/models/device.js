var mongoose = require('mongoose');
var schema = mongoose.Schema;

var deviceSchema = new schema({
    uri: String,
    name: String,
},
{
    timestamps: { created: 'created', updated: 'updated' }
});

module.exports = mongoose.model('Device', deviceSchema);