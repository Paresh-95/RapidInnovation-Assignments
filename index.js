const express = require("express")
const dbConnect = require("./config/db")


//routes
const TaskRoutes = require("./routes/TaskRoutes")


//setup
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 4000

app.use(express.json());
app.use("/api/v1",TaskRoutes)   


app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`);
})

dbConnect();


app.get("/",(req,res)=>{
    res.send("Task API's")
})
