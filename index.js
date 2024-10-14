const dbConnect = require("./config/db");
const TaskRoutes = require("./routes/TaskRoutes");
require("dotenv").config();
const http = require('http'); 
const express = require("express");
const cors = require("cors")
const { createWebSocketServer } = require('./websocket');

const app = express();

const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: process.env.FRONTEND_URL, 
    methods: 'GET,POST', 
  };
  
app.use(cors(corsOptions));


app.use(express.json());


dbConnect();


app.use("/api/v1", TaskRoutes);


app.get("/", (req, res) => {
    res.send("Task API's");
});


const server = http.createServer(app);

createWebSocketServer(server);

server.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});
