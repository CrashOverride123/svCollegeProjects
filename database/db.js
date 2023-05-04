//==========================================================================
// here we define the dependencies of the db itself and in the end of the
// file we export it so we can access it from anywhere needed
//==========================================================================
const dataBase = require('mongoose');

const host = 'mongodb+srv://toni97:Nz7eqh6b@svshop.7rozj8r.mongodb.net/test;
//==========================================================================
// Here we create the database connectivity interface
//==========================================================================
dataBase
  .connect(host)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err);
  });
// =========================================================================
// This will be the main start point for the database schema creation
//==========================================================================
const userSchema = dataBase.Schema({
  name: String,
  email: String,
  password: String,
  confirm: String,
});
//==========================================================================
const productList = dataBase.Schema({
  price: Number,
  name: String,
});
//==========================================================================
const schemaOfOrders = dataBase.Schema({
  userName: String,
  ordersArr: Array,
});
//==========================================================================
module.exports = dataBase.model('User', userSchema);
module.exports = dataBase.model('Product', productList);
module.exports = dataBase.model('Orders', schemaOfOrders);
//==========================================================================
// This is the section of the db models for the website
//==========================================================================
module.exports = dataBase;
