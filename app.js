require("dotenv").config({path:"./config/config.env"});
const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db');
const auth = require("./middlewares/auth");

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require('cors')());

//routes
//delete this
app.get("/protected", (req,res) => {
    return res.json({
        message: "Hello World"
    })
})
app.use("/api/",require("./routes/auth"));



//server configurations

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT,async() => {
    try {
        await connectDB();
    console.log(`server listening on this port:${PORT}`)
    } catch (err) {
        console.log(err);
    }
});

server.setTimeout(5000);