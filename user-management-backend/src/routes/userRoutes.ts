import express from 'express';
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

// Routes
router.get('/users', getUsers); // Get all users
router.get('/users/:id', getUserById); // Get user by ID
router.post('/users', addUser); // Add a new user
router.put('/users/:id', updateUser); // Update a user
router.delete('/users/:id', deleteUser); // Delete a user

export default router;
