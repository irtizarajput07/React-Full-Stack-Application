var mongoose=require("mongoose");

var studentSchema=new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
var studentModel= mongoose.model("student",studentSchema);
module.exports=studentModel;