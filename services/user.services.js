import mongoose from 'mongoose';
import { User } from '../helpers/db.js';

const createUser = () => {

};

const findAllUsers = async () => {
    try {
        const users = await User.find()
        return users;
    } catch (error) {
        console.log(error);
    }
};

const findAllFriends = async (userId) => {
    try {
        const users = await User.aggregate([
            {
                $match: {
                    _id: userId
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: "friends_id",
                    foreignField: "_id",
                    as: "friends_details"
                }
            }
        ]);
        return users;
    } catch (error) {
        console.log(error);
    }
};

export {
    createUser,
    findAllUsers,
    findAllFriends
};