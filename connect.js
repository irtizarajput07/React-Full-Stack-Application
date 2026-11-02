var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/firstcrud").then(()=>{
    console.log("connection successfully");
})