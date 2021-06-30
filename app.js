const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const place = require("random-places");

var city="";
var country = "";

app.get("/", (req, res)=>{
  city = getRandomPlace().name;

  const https = require("https");

  https.get("https://us1.locationiq.com/v1/search.php?key=pk.d2e2d871f765cc0203dc4423965f3d41&q="+city+"&format=json", (res) => {
  console.log('statusCode:', res.statusCode);
  var data;
    res.on("data", function(chunk) {
      if (!data) {
        data = chunk;
      } else {
        data += chunk;
      }
    });

  res.on('end', () => {
    const obj = JSON.parse(data);
    console.log(obj[0].lat);
    console.log(obj[0].lon);
  });

}).on('error', (e) => {
  console.error(e);
});


//https://us1.locationiq.com/v1/search.php?key=pk.d2e2d871f765cc0203dc4423965f3d41&q=Empire%20State%20Building&format=json


  res.send(city + ", " + country);
});




app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});
