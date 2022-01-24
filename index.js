const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

// Load Mongoose models
// const { List, Task } = require('./db/models/index');
const { List } = require('./db/models/list.model');

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
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});