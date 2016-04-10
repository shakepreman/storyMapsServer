// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var storySchema = new mongoose.Schema({
  name: String,
  description: String,
  mapUrl: String,
  locations:[{
    id: Number
  }],
  difficulty: String,
  nextLocationId: String,
  latitude: Number,
  longitude: Number
});

// Return Model
module.exports = restful.model('Story', storySchema);
