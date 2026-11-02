var express= require('express');
require('./Model/connect');
var student= require('./Model/student');
var cors= require('cors');
var app= express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("working");
});

//post data ko submit
app.post("/create-student",(req,res)=>{
    student.create(req.body).then(()=>{
        res.send("data is inserted");
    })
})

//get database se data ko fetch
app.get("/student",(req,res)=>{
    student.find().then((response)=>{
        res.send(response);
    }) 
})

//get by id
app.get("/student/:id",(req,res)=>{
    student.findById(req.params.id).then((response)=>{
        res.send(response);
    })
});
app.listen(3000);