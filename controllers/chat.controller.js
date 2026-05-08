import { 
    findChat,
    findChatsByUserId,
    findChatByMembers,
    createChat,
    findAllChats 
} from "../services/chat.services.js";

export const getChats = async (req, res) => {
    try {
        const results = await findAllChats();
        return res.json({
            chats: results
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message || "An unknown error occurred"
        });
    }
};

export const getChatsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(userId);
        const results = await findChatsByUserId(userId);
        return res.json({
            chats: results
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "An unknown error occurred"
        });
    }
};

export const getChatByChatId = async (req, res) => {
    try {
        const chatId = req.params.chatId;
        const result = await findChat(chatId);
        return res.json({
            chat: result
        });
    } catch (error) {
        return res.status(400).json({
             message: error.message || "An unknown error occurred"
        })
    }
}