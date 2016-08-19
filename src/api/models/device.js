var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var deviceSchema = new Schema({
    uri: String,
    name: String,
},
{
    timestamps: { created: 'created', updated: 'updated' }
});

deviceSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

deviceSchema.set('toJSON', { 
    virtuals: true
});

deviceSchema.set('toObject', { 
    virtuals: true
});

module.exports = Mongoose.model('Device', deviceSchema);