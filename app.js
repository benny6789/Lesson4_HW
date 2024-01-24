
const express = require("express");

const path = require("path");

const http = require("http");

const {routesInit} = require("./routes/configRoutes");


const app = express();

routesInit(app);

const server = http.createServer(app);

server.listen(3001);