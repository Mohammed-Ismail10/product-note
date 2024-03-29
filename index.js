import express from 'express';
import usersRouter from './src/module/users/users.router.js'
import produtsRouter from './src/module/products/products.router.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/users', usersRouter);
app.use('/products', produtsRouter);


// Assignment 3:
// *using  mysql   and express * 
// create two tables
// user table (name , email , password ,age)
// product table (pName , pDescription, price, createdby)

// -user APIs-
// 1- add user (user must not found before)
// 2- update user 
// 3- delete user(user must be found)
// 4- search for user where his name start with "a" and age less than 30 => using like for characters
// 5- search for users by list of ids => using IN
// 6- get all user 
// 7- get all users with products

// -product APIs-
// 1- add product(product must not found before)
// 2- delete product (product owner only can do this and product must be found )
// 3- update product (product owner only)
// 4- get all products 
// 5- search for products where price greater than 3000


const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})