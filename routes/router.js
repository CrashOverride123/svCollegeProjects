//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');
const router = express.Router();
const path = require('path');
const schema = require('../database/db.js');
const { Schema } = require('mongoose');
//================================================================================
// Performs registration if everything is correctly registered
//================================================================================
router.post('/addUser', async (req, res) => {
  console.log(req.body);

  let result = {};

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = new schema.uModel({
      name: name,
      email: email,
      password: password,
    });
    result = await user.save();
  } catch (err) {
    result.error = err.message;
  } finally {
    res.send({ status: 200, message: 'success', result: result });
  }
});
//================================================================================
// Performs authentication on the user identification info based on the html
//================================================================================
router.post('/validation', (req, res) => {
  const iValid = async () => {
    const temp = {
      email: req.body.email,
      password: req.body.password,
    };
    const validatedUser = await schema.uModel.findOne({
      email: temp.email,
      password: temp.password,
    });
    if (validatedUser === null) {
      res.json(`Error the user doesn't exist`);
    } else {
      res.json(true);
    }
  };
  iValid();
});
//==========================================================================
// inserting an array of items into the db and than displaying them
//==========================================================================

//==========================================================================

//==========================================================================
// posting the get requests to the server
//==========================================================================
router.get('/product', (req, res) => {
  res.sendFile(path.resolve((__dirname, '../product.html')));
});
//==========================================================================
// exporting the router, so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;
