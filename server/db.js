const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', () => {
  console.log('Connected to mongodb');
});

module.exports = mongoose;