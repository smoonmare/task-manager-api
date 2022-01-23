const express = require('express');
const app = express();

/* Route Handlers */

/* List Routes */

/**
 * GET /lists
 * Purpose: Get all lists
 */
app.get('/lists', (req,res) => {
  // Returns an array of all the projects in database
})

/**
 * POST /lists
 * Purpose: Create a list
 */
app.post('/lists', (req, res) => {
  // Creates a new project and returns the new project /w ID field in JSON format
})

/**
 * PATH /lists/:id
 * Purpose: Update a specified project
 */
app.patch('/lists/:id', (req, res) => {
  
})
app.listen(3000, () => {
  console.log("server is listening on port 3000");
})