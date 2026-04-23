import { Chat } from "../helpers/db.js"

const create = async (body) => {
    try {
        const {
            members
        } = body;
        console.log(members);
        const res = await Chat.create({
            members
        });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

const find = async (chatId) => {
    try {
        const res = await Chat.findById(chatId);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export {
    create as createChat,
    find as findChat
};