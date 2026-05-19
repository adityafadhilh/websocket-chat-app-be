import {
    findAllFriends,
    findAllUsers,
    updateStatus
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

export const getAllFriends = async (req, res) => {
    try {
        const { userId } = req.params;
        const users = await findAllFriends(userId);
        return res.json({
            users
        });
    } catch (error) {
        return res.error(400).json({
            message: error.message || "An unknown error occurred"
        });
    }
}

export const updateUserStatus = async (req, res) => {
    try {
        const { userId } = req.params;
        const body = req.body;
        const user = await updateStatus(userId, body.status);
        return res.json({
            user
        });
    } catch (error) {
         return res.error(400).json({
            message: error.message || "An unknown error occurred"
        });
    }
};