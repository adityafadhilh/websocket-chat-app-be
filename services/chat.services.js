import { Chat } from "../helpers/db.js"

const create = async (body) => {
    try {
        const {
            members
        } = body;
        console.log(members);
        const res = await Chat.insertOne({
            members
        });
        console.log(res);
        return res;
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

const findByMembers = async (membersArr) => {
    try {
        const res = await Chat.find({
            members: {
                $all: membersArr
            }
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const update = async (chatId, history) => {
    try {
        console.log('chatId: ' + chatId);
        const res = await Chat.findByIdAndUpdate(chatId, {
            $set: {
                updatedAt: Date.now(),
                history
            }
        }, {
            returnDocument: 'after'
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

export {
    create as createChat,
    find as findChat,
    findByMembers as findChatByMembers,
    update as updateChat
};