import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    members: [{
        type: String,
    }],
    history: [{
        to: {
            type: String
        },
        from: {
            type: String
        },
        message: {
            type: String,
        },
        sentTime: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export const ChatModel = mongoose.model('Chat', ChatSchema);