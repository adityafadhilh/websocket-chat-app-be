import { Router } from "express";
import {
    getAllFriends,
    getAllUsers,
    updateUserStatus
} from '../controllers/user.controllers.js';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId/friends', getAllFriends);
userRoutes.patch('/:userId/status', updateUserStatus);