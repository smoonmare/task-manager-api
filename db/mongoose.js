const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true })
        .then(() => {
          console.log("Connected to MongoDB successfully!");
        }).catch((error) => {
          console.log("Error while attempting to connect to MongoDB");
          console.log(error);
        });

// Prevents depreciation warnings(from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose
};