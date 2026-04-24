import { Router } from "express";
import {
    createChat,
    findChat
} from '../services/chat.services.js';

export const chatRoutes = Router();

chatRoutes.get('/', (req, res) => {
    return res.send({
        message: 'Chat'
    });
});

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