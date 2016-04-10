// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Story = require('../models/story');
var Locations = require('../models/locations');

// Routes
Story.methods(['get', 'put', 'post', 'delete']);
Story.register(router, '/stories');

Locations.methods(['get', 'put', 'post', 'delete']);
Locations.register(router, '/locations');

// Return Router
module.exports = router;
