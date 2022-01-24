const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

// Load Mongoose models
// const { List, Task } = require('./db/models/index');
const { List } = require('./db/models/list.model');
const { Task } = require('./db/models/task.model');

// Load Middleware
app.use(bodyParser.json());

/* Route Handlers */

/* List Routes */

/**
 * GET /lists
 * Purpose: Get all lists
 */
app.get('/lists', (req,res) => {
  // Returns an array of all the projects in database
  List.find().then((lists) => {
    res.send(lists);
  }).catch((error) => {
    res.send(error);
  });
});

/**
 * POST /lists
 * Purpose: Create a list
 */
app.post('/lists', (req, res) => {
  // Creates a new project and returns the new project /w ID field in JSON format
  let title = req.body.title;
  let newList = new List({
    title
  });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  });
});

/**
 * PATH /lists/:id
 * Purpose: Update a specified project
 */
app.patch('/lists/:id', (req, res) => {
  // Updates the specified list /w the new values from JSON request
  List.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
      res.sendStatus(200);
    });
});

/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete('/lists/:id', (req, res) => {
  // Deletes the specified list
  List.findOneAndRemove({
    _id: req.params.id
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

/**
 * GET /lists/:listId/task
 * Purpose: get all tasks in the specific list
 */
app.get('/lists/:listId/tasks', (req, res) => {
  // Returns all the tasks that belong to the list
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks);
  });
});

/**
 * POST /lists/:listId/tasks
 * Purpose: Create a new task on a specific list
 */
app.post('/lists/:listId/tasks', (req, res) => {
  // Creates the new task on a specific List id
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

/**
 * PATCH /lists/:listsId/tasks/:taskId
 * Purpose: update a specific task in the List
 */
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndUpdate({
    _id: req.params.taskId,
    _listId: req.params.listId
  }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});