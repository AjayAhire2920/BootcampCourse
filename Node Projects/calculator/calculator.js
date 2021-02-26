 const express = require("express");
 const bodyParser = require("body-parser")
  

const app = express();

 app.use(bodyParser.urlencoded( ));  

app.get("/" , function(req, res){
     res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req, res){
     
      var n1 = Number(req.body.number1) ;
      var n2 =  Number( req.body.number2);
      var result = n1 + n2;

      res.send("the result is "+ result);
})


app.get("/bmiCalculator" , function(req,res){
     res.sendFile(__dirname + "/bmiCalculator.html");
})
 
app.post("/bmiCalculator" , function(req, res){
     var weight = req.body.w1;
     var height = req.body.h1;
     var Bmi = weight / (height*height);

     res.send("the result is " + Bmi);

})

 

app.listen(3000 , function(){
  console.log("Server is running on port 3000");
});