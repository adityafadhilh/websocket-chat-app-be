import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
// import bodyParser from "body-parser";
import { userRoutes } from "./routes/user.routes.js";
import { chatRoutes } from "./routes/chat.routes.js";
import { createChat, findChat, findChatByMembers, updateChat } from "./services/chat.services.js";

const app = express();
const server = createServer(app);
const port = 3000;
const io = new Server(server);

app.use(cors());
app.use(express.json());
// app.use(bodyParser);
app.use('/users', userRoutes);
app.use('/chats', chatRoutes);

app.get('/', (req, res) => {
    return res.send({
        message: "Hello World"
    });
});

io.on('connection', async (socket) => {
    console.log("User Connected");
    const {
        userId,
        recipientId,
    } = socket.handshake.query;

    console.log('query: ' + JSON.stringify(socket.handshake.query));

    const findOneChat = await findChatByMembers([userId, recipientId]);

    console.log('findOneChat: ' + findOneChat);

    let chatId = ''

    if (findOneChat.length > 0) {
        console.log('findOneChat');
        chatId = findOneChat[0]._id.toString();
        console.log(chatId);
        socket.join(chatId);
    } else {
        console.log('here');
        // console.log('here');
        const chat = await createChat({
            members: [userId, recipientId],
        });
        console.log('chatId: ' + chat._id);
        chatId = chat._id.toString();
        socket.join(chatId);
    }

    socket.on('chat message', async (history) => {
        console.log('history: ' + JSON.stringify(history));
        const updatedChat = await updateChat(chatId, history);
        console.log('updatedChat: ' + updatedChat);
        // console.log(updatedChat);
        socket.to(chatId).emit(history)
    });

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
});