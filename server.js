var express = require("express");
var path = require("path");
var fs = require("fs")

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var notes = [];
  
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
  app.delete("/api/notes/:id", function(req, res) {
    var chosen = req.params.note;
  
    console.log(chosen);
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
  
    return res.json(false);
  });

  app.post("/api/notes", function(req, res) {
   notes.push(req,body);
  
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  