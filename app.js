//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Meditate", "Code", "Read"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.getDate();

  /*var today = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var day = today.toLocaleDateString("en-US", options);*/

  res.render("list", {listTitle: day, newListItems: items});
});
  /*if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    //res.sendFile(__dirname + "/weekend.html");
    //res.write("<h1>Yay! It's the weekend!</h1>");
    //res.send("<h1>Yay! It's the weekend!</h1>");
  } else {
    day = "Weekday";
  }
  res.render("list", {kindOfDay: day});
  /*res.sendFile(__dirname + "/weekday.html");
  res.write("<p>Damn! It's not the weeekend.</p>");
  res.write("<h1>Damn! I have to work!</h1>");
  res.send();*/
  //res.send("Damn! I have to work!");

app.post("/", function(req, res){

var item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
     } else {
       items.push(item);
       res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list",{listTitle: "Work List",newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
