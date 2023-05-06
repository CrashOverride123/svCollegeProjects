//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');

const router = express.Router();
const path = require('path');

const schema = require('../database/db.js');

//==========================================================================
// asking the server to retrieve the specified files from our application
//==========================================================================

//==========================================================================

router.post('/addUser', async (req, res) => {

  console.log(req.body)

  let result = {};

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try
  {
    const user = new schema.uModel({name: name, email: email, password: password});
    result = await user.save();
  }
  catch (err) 
  { 
    result.error = err.message;
  } 
  finally 
  {
    res.send({status:200, message: 'success', result: result});
  }

})
//==========================================================================
//==========================================================================
// posting the response from the server
//==========================================================================
//==========================================================================
// router.post('/signUp', (req, res) => {});

//==========================================================================
// exporting the router, so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;

