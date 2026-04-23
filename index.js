import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
// import bodyParser from "body-parser";
import { userRoutes } from "./routes/user.routes.js";
import { chatRoutes } from "./routes/chat.routes.js";
import { createChat, findChat } from "./services/chat.services.js";

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
        chatId
    } = socket.handshake.query;

    const findOneChat = indChat(chatId);

    if (findOneChat) {
        // socket.join(findOneChat.id);
    }

    socket.on('chat message', (data) => {
        if (findOneChat) {
            socket.to(findOneChat.id).emit()
        } else {
            const chat = createChat({
                members: [data.from, data.to],
                history: data.history
            });
            const chatId = chat._id.toString();
            socket.to(chatId).emit(data);
        }
    });

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
});