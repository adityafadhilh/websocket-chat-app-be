import mongoose from "mongoose";
import { UserModel } from "../models/user.models.js";
import { ChatModel } from "../models/chat.models.js";

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database successfully connected!");
    })
    .catch((e) => {
        console.log(e)
    });

mongoose.Promise = global.Promise;

export const User = UserModel;
export const Chat = ChatModel;

