//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');
const router = express.Router();
const path = require('path');
const schema = require('../database/db.js');
const { Schema } = require('mongoose');
//================================================================================
// initializing an array of products
//================================================================================
let products = [
  {
    name: 'Product 1',
    price: 10,
  },
  {
    name: 'Product 2',
    price: 5,
  },
  {
    name: 'Product 3',
    price: 20,
  },
  {
    name: 'Product 4',
    price: 15,
  },
];

const appendProduct = async (arr) => {
  await schema.pModel.insertMany(arr);
};
 appendProduct(products);
 //===============================================================================
 // Register the user to the database
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
      res.json({ result: true, name: validatedUser.name });
    }
  };
  iValid();
});
//================================================================================
// 
//================================================================================
router.post('/admitToUser', async (req, res) => {
  const tempI = {
    userName: req.body.user,
    ordersArr: req.body.cOrder,
  };
  await schema.oModel.insertMany(tempI);
  res.json(true);
});
//================================================================================
// Takes the items out from the db and returns
//================================================================================
router.get('/productsFromDb', async (req, res) => {
  try {
    const allProducts = await schema.pModel.find();
    res.json(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
//================================================================================
// Performs a checkout for the user order
//================================================================================
router.get('/checkOut', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/pItems.html'));
});
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
