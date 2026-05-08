import { Router } from "express";
import {
    createChat,
    findChat
} from '../services/chat.services.js';
import {
    getChats,
    getChatsByUserId,
    getChatByChatId
} from '../controllers/chat.controller.js';

export const chatRoutes = Router();

chatRoutes.get('/', getChats);

chatRoutes.get('/user/:userId', getChatsByUserId);

chatRoutes.get('/:chatId', getChatByChatId);

chatRoutes.post('/', async (req, res) => {
    const {
        members
    } = req.body;
    console.log(members);
    const chatRes = createChat({
        members
    });
    console.log(chatRes);
    return res.send({
        message: "Succesfully created chat"
    });
})