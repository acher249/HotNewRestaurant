// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Objects for Reserved and Waitlist (DATA)
// =============================================================

var restaurant = {
  reserved: [
    {
      name: "Adam",
      phoneNumber: 2063301295,
      email: "jchernick2010@gmail.com",
      id: 01
    },
    {
      name: "Brittney",
      phoneNumber: 20655543214,
      email: "britt.m@gmail.com",
      id: 02
    },
  ],
  waitlist: [
    {
      name: "Bill",
      phoneNumber: 20624016592,
      email: "bill.bartson@gmail.com",
      id: 03
    }
  ],
};

// Routes
// =============================================================

//all.html view.html add/html
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "all.html"));
});

// Displays reserved or waitlist objects at endpoint
app.get("/api/restaurant/reserved", function(req, res) {
  return res.json(restaurant.reserved);
});

app.get("/api/restaurant/waitlist", function(req, res) {
  return res.json(restaurant.waitlist);
});

// Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/restaurant", function(req, res) {

  var newTable = req.body;

  console.log(newTable);
  console.log(restaurant.reserved);
  if(restaurant.reserved.length < 5){
    restaurant.reserved.push(newTable);
  }else{
    restaurant.waitlist.push(newTable);
  }



  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
