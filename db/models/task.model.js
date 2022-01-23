const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    tyle: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});

const Task = mongoose.Model('Task', TaskSchema);

module.export = { Task }