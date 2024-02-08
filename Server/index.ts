import { createServer } from "http";

import {} from "@/types/global";

import express from "express";
import next, { NextApiHandler } from "next";
import { Server } from "socket.io";
import { v4 } from "uuid";

const PORT = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app = express();
  const server = createServer(app);

  const io = new Server<ClientToServer, ServerToClient>(server);

  io.on("connection", (socket) => {
    console.log(socket);
    socket.on("draw", (moves, options) => {
      socket.broadcast.emit("socket_draw", moves, options);
    });
  });

  app.all("*", (req: any, res: any) => {
    nextHandler(req, res);
  });

  server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });
});
