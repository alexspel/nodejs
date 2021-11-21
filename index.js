const app = require("./src/task6.js");
const io = require("socket.io");

const socketServer = io(app);
const users = [];

socketServer.on("connection", (socket) => {
    console.log("new connection");
    users.push(socket.id);
    socket.emit("setId", { userId: socket.id });
    socketServer.emit("message", {
        msg: `${socket.id} connected`,
        totalUsers: users.length,
    });
    socket.on("message", function (data) {
        console.log("message", JSON.stringify(data));
        socketServer.emit("message", {
            msg: `${socket.id}: ${data.msg}`,
            totalUsers: users.length,
        });
    });
    socket.on("disconnect", function () {
        users.splice(users.indexOf(socket.id), 1);
        socket.broadcast.emit("message", { msg: `${socket.id} disconnected` });
    });
});

app.listen(80, () => {
    console.log("Server started on port 3030");
});
