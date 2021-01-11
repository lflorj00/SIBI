const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 8000;
const neo4j = require("neo4j-driver");
const driver = neo4j.driver("bolt://localhost:11003", neo4j.auth.basic("neo4j", "1234"));
const session = driver.session();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded( {extended: true} ));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.post("/reco", function (req, res) {
    var subgender = req.body.subgender;
    console.log(subgender);
    var query = "MATCH (n:Song) where n.subgender ='" + subgender + "' return n";
  
    console.log(query);
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
      },
      onCompleted: function () {
        var randon_int = Math.floor(Math.random() * array.length);
        console.log(array[randon_int]);
  
        res.send([array[randon_int]]);
  
      },
      onError: function (error) {
        console.log(error);
      },
    });
  }),

  app.get("/real", function (req, res) {
    var query = "MATCH (n:Song) return n";
    console.log("prueba");
    var array = [];

    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
      },
      onCompleted: function () {
        var randon_int = Math.floor(Math.random() * array.length);
        console.log(array[randon_int]);

        res.send([array[randon_int]]);

      },
      onError: function (error) {
        console.log(error);
      },
    });
  }),

  app.get("/can", function (req, res) {
    var query = "MATCH (n:Song) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

      },
      onError: function (error) {
        console.log(error);
      },
    });
  }),

  app.get("/alb", function (req, res) {
    var query = "MATCH (n:Album) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

      },
      onError: function (error) {
        console.log(error);
      },
    });
  }),

  app.get("/art", function (req, res) {
    var query = "match (n) where (:Gender)-[]->(n) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

      },
      onError: function (error) {
        console.log(error);
      },
    });
  });

  app.listen(port, function () {
    console.log("Example app listening on port " + port);
  });