const mongoose = require('mongoose');

const dbUri = '';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
