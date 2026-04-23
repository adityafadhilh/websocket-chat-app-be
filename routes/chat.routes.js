import { Router } from "express";

export const chatRoutes = Router();

chatRoutes.get('/', (req, res) => {
    return res.send({
        message: 'Chat'
    });
});