import {User} from '../helpers/db.js';

const create = () => {

};

const findAll = async () => {
    const users = await User.find();
    return users;
};

export {
    create,
    findAll
};