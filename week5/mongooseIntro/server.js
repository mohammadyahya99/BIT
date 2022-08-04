var bodyParser = require("body-parser");
var express = require("express");
var app = express();

var mongoose = require("mongoose");
var Person = require("./mongoose-practice/person");

mongoose.connect("mongodb://localhost/peopleDB");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});

app.post("/person", function (request, response) {
  const objPerson = request.body;
  //   p1.save;
  const p1 = new Person(objPerson);
  p1.save();
  response.send(p1);
});

app.put("/person/:personId", function (request, response) {
  const idParameter = request.params.personId;
  Person.findById(`${idParameter}`, function (err, people) {
    people.age = 80;
    response.send(people);
  });
});

app.delete("/apocalypse", function (request, respone) {
  Person.find({}, function (err, people) {
    people.forEach((element) => {
      element.remove();
    });
  });
  respone.send("All records deleted successfully");
});
