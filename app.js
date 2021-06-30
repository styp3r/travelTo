const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const place = require("random-places");

var city="";
var country = "";

app.get("/", (req, res)=>{
  city = getRandomPlace().name;
  country = getRandomPlace().country;


//https://us1.locationiq.com/v1/search.php?key=pk.d2e2d871f765cc0203dc4423965f3d41&q=Empire%20State%20Building&format=json


  res.send(city + ", " + country);
});




app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});
