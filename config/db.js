const mongoose = require('mongoose');

const connectDB = async()=>{
    return mongoose.connect("mongodb+srv://smarthealth:7IUY3fc9npWvvQMi@cluster0.zgnht.mongodb.net/smarthealth_db?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log(`connection to database established...`))
    .catch((err)=>console.log(err));
};

module.exports = connectDB;