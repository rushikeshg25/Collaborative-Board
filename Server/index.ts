import { createServer } from "http";

import {} from "@/types/global";

import express from "express";
import next, { NextApiHandler } from "next";
import { Server } from "socket.io";
import { v4 } from "uuid";

const port = parseInt(process.env.PORT || "3000", 10);
