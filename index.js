import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
// import bodyParser from "body-parser";
import { userRoutes } from "./routes/user.routes.js";
import { chatRoutes } from "./routes/chat.routes.js";

const app = express();
const server = createServer(app);
const port = 3000;
const io = new Server(server);

app.use(cors());
// app.use(bodyParser);
app.use('/users', userRoutes);
app.use('/chats', chatRoutes);

app.get('/', (req, res) => {
    return res.send({
        message: "Hello World"
    });
});

io.on('connection', (socket) => {
    console.log("User Connected");
    socket.on('disconnect', () => {
        console.log("User Disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
});