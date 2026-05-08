import { User } from '../helpers/db.js';

const createUser = () => {

};

const findAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
    }
};

export {
    createUser,
    findAllUsers
};