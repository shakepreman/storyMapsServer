// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var locationSchema = new mongoose.Schema({
  name: String,
  subTitle: String,
  description: String,
  url: String,
  urlType: String,
  latitude: Number,
  longitude: Number,
  nextLocationId: String
});

// Return Model
module.exports = restful.model('Locations', locationSchema);
