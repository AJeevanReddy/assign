var express=require('express'),
app=express(),
http=require('http').Server(app).listen(8080);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/homepage.html");
})