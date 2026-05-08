import {
    findAllUsers
} from '../services/user.services.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await findAllUsers();
        return res.json({
            users
        });
    } catch (error) {
        return res.status(400).json({
             message: error.message || "An unknown error occurred"
        })
    }
};   