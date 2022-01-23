const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/TaskManager', { useNewUrlParser: true })
        .then(() => {
          console.log("Connected to MongoDB successfully!");
        }).catch((error) => {
          console.log("Error while attempting to make a connection to MongoDB");
          console.log(error);
        });



module.exports = {
  mongoose
};