var mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/hoteldatabase'

mongoose.connect(url)
    .then(() => console.log('success'))
    .catch((err) => console.log(err));

module.exports = mongoose