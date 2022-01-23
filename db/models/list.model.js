const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  title: {
    tyle: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

const List = mongoose.Model('List', ListSchema);

module.export = { List }