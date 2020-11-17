var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        price: { type: Number, required: true },
        number_in_stock: { type: Number }
    }
)

ItemSchema
    .virtual('url')
    .get( function () {
        return '/items/' + this._id;
    });

module.exports = mongoose.model('Item', ItemSchema);