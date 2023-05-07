//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');
const router = express.Router();
const path = require('path');
const schema = require('../database/db.js');
const { Schema } = require('mongoose');
//========================================================================
// posting the requests to the server 
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
router.post('/validation', (req, res) => {
  const iValid = async () => {
    const temp = {
      email: req.body.email,
      password: req.body.password,
    }
    const validatedUser = await schema.uModel.findOne({ email: temp.email, password: temp.password });
    if (validatedUser === null) {
      res.json(`Error the user doesn't exist`);
    } else {
      res.json(true);
    }
  }
  iValid()
})
//==========================================================================
router.post('/products', (req, res) => {
  const iProducts = async () => {
    const p = {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity
    }


    const product = await schema.pModel.insertMany({ name: p.name, price: p.price,quantity: p.quantity});
    if (product === null) {
      res.json(`Error the product can be added doesn't exist`);
    } else {
      res.send(`<script>alert("New Product has been added "); </script>`)
    }
  }
  iProducts()
});
//==========================================================================
// posting the get requests to the server
//==========================================================================
router.get('/products', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/product.html')); 
})
//==========================================================================
// exporting the router, so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;

