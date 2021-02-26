 const express = require ("express");
 const https = require("https");
 const bodyParser = require("body-parser");


 const app = express();

 app.use(bodyParser.urlencoded({extended:true}));


 app.get("/" , function(req,res){

    res.sendFile(__dirname + "/index.html");
});

    app.post("/" , function(req, res){
       

    const query = req.body.cityName;
    const appid = "77cb4d2e4b3e784d2c1e6ca6512c074e";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid + "&unit=" + unit  ;
    https.get(url , function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
             const weatherData =  JSON.parse(data)
             
              const temp = weatherData.main.temp              
              console.log(temp)

              const weatherType = weatherData.weather[0].main
              console.log(weatherType)

              const weatherDescription = weatherData.weather[0].description
              console.log(weatherDescription)
              
              const icon = weatherData.weather[0].icon
              const imgUrl = "http://openweathermap.org/img/wn/" + icon +  "@2x.png"

           
              res.write("<h1>The temperature in " + query + " is " +temp+ " degree celcisus. </h1>");
              res.write("<h2>The weather is "+ weatherType+ " Here.</h2>")
              res.write("<h3>The Weather Description is "+weatherDescription+ " here. </h3>");
              res.write("<img src=" + imgUrl + ">")
              res.send();
        })

    });
       
    });

    
   

 

 app.listen(3000 , function(){
     console.log("The server is running on port 3000")
 });