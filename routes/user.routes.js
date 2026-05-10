import { Router } from "express";
import {
    getAllFriends,
    getAllUsers
} from '../controllers/user.controllers.js';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId/friends', getAllFriends);