
const express  = require("express");

const app = express();

app.get("/" , function(req, res){
    res.send("<h1>Hello Jenny </h1>")
 })

 app.get("/contact", function(req, res){
     res.send("contact me at : ajaymojoestech@gmail.com")
 })

 app.get("/about" , function(req, res){
     res.send(" im ajay i love beer and chicken") 
 })

 app.get("/hobbies", function(req, res){
     res.send("<ul><li> coffee</li> <li> Football </li> <li> Basketball </li> </ul>")
 })



app.listen(3000 ,function(){
    console.log("server started on port 3000");
});