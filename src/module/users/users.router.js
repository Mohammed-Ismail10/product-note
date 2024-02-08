

import express from "express";
import { addUser, deleteUser, getAllUsers, getUsersAndProducts, specificSearch, specificSearchById, updateUser } from "./users.controller.js";

const router = express.Router();


//add user (user must not found before)
router.post('/', addUser)

// update user 
router.put('/:id', updateUser);

// delete user(user must be found)
router.delete('/:id', deleteUser);

// search for user where his name start with "a" and age less than 30 => using like for characters
router.get('/search', specificSearch);

// search for users by list of ids => using IN
router.get('/ids', specificSearchById);

// get all user 
router.get('/', getAllUsers);

// get all users with products
router.get('/usersAndProducts', getUsersAndProducts);




export default router;