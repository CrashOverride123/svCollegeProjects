//==========================================================================
// here we define the dependencies of the db itself and in the end of the
// file we export it so we can access it from anywhere needed
//==========================================================================
const db = require('mongoose');
const host = 'mongodb+srv://toni97:Nz7eqh6b@svshop.7rozj8r.mongodb.net/svShop';
//==========================================================================
// Here we create the database connectivity interface
//==========================================================================
db.connect(host)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err);
  });
// =========================================================================
// This will be the main start point for the database schema creation
//==========================================================================
const userSchema = {
  email: String,
  password: String,
  confirm: String,
};
const productList = {
  price: Number,
  name: String,
  dOP: Number,
};
//==========================================================================
// This is the section of the db models for the website
//==========================================================================
const User = db.model('User', userSchema);
const pList = db.model('pList', productList);
//==========================================================================
module.exports = db;
