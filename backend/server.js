const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const documents = {};

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-document", (docId) => {
        socket.join(docId);
        socket.emit("load-document", documents[docId] || "");

        socket.on("send-changes", ({ docId, content }) => {
            socket.to(docId).emit("receive-changes", content);
        });

        socket.on("save-document", ({ docId, content }) => {
            documents[docId] = content;
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
