const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://adityayadav26official_db_user:<db_password>@cluster0.kxadhod.mongodb.net/?appName=Cluster0")

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});

db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});

db.on("error",(error)=>{
    console.log("MongoDB connection error", error);
});

module.exports = db;