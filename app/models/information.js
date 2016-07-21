const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const InformationSchema = new Schema({
    title : {
      type: String,
      required: true
    },
    description : {
      type: String,
      required: true
    },
    links : [],
    created : {
      type: Date,
      default: Date.now
    },
    city: {
      type: ObjectId,
      ref: 'City',
      required: true
    },
    enable : {
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('Information', InformationSchema)
