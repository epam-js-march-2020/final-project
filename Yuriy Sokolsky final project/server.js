var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(express.static("static"));
app.set("port", process.env.PORT || 80);

var mongodb = require("mongodb");
var dburl = "mongodb://Admin:-9wm4GEKqnEnRq@ds062818.mlab.com:62818/haircut";
var mongo = mongodb.MongoClient;

var moment = require("moment");

let server = app.listen(app.get("port"), function () {
  //identification

  console.log(
    "Сервер запущен на  http://localhost:" +
      app.get("port") +
      "  Ctrl-C to terminate"
  );
});
app.get("/servicesList", function (req, res) {
  mongo.connect(dburl, function (err, db) {
    db.collection("services")
      .find()
      .toArray(function (err, results) {
        res.json(results);
        db.close();
      });
  });
});

app.get("/servicesList/:id", function (req, res) {
  mongo.connect(dburl, function (err, db) {
    db.collection("services").findOne(
      { id: parseInt(req.params.id) },
      function (err, doc) {
        res.json(doc);
        db.close();
      }
    );
  });
});

app.post("/adminLogin", function (req, res) {
  if (checkAdminLoginPas(req.body.login, req.body.password)) {
    mongo.connect(dburl, function (err, db) {
      let allCollections = [];
      db.listCollections().toArray(function (err, collInfos) {
        collInfos.forEach((eachCollectionDetails) => {
          allCollections.push(eachCollectionDetails.name);
        });
        res.json(allCollections);
      });
    });
  } else res.json(false);
});

app.get("/collection/:name", function (req, res) {
  mongo.connect(dburl, function (err, db) {
    db.collection(req.params.name)
      .find()
      .toArray(function (err, results) {
        res.json(results);
        db.close();
      });
  });
});

app.post("/collectionAddNewItem", function (req, res) {
  if (
    checkAdminLoginPas(req.body.loginPass.login, req.body.loginPass.password)
  ) {
    Object.keys(req.body.newElement).forEach(function (el) {
      if (!/[^\d\.]/g.test(req.body.newElement[el]))
        req.body.newElement[el] = parseFloat(req.body.newElement[el]);
    });
    mongo.connect(dburl, function (err, db) {
      db.collection(req.body.collectionName).insertOne(
        req.body.newElement,
        function (err, result) {
          console.log(
            `В таблицу ${req.body.collectionName} добавлена запись с id ${req.body.newElement.id}  `
          );
          db.close();
          res.json(req.body.newElement.id);
        }
      );
    });
  } else res.json(false);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

function checkAdminLoginPas(login, pas) {
  if (login === "admin" && pas === "admin") {
    return true;
  } else return false;
}
app.post("/login", function (req, res) {
  checkUserLogPas(req.body.login, req.body.password).then((result) => {
    if (typeof result !== "string") {
      mongo.connect(dburl, function (err, db) {
        db.collection("users").findOneAndUpdate(
          { _id: result._id },
          { $set: { last_login: moment().format() } }
        );
      });
    }
    res.json(result);
  });
});

function checkUserLogPas(login, pas) {
  return new Promise((resolve, reject) => {
    if (login != "")
      mongo.connect(dburl, function (err, db) {
        db.collection("users").findOne({ login: login }, function (err, doc) {
          if (doc) {
            if (doc.password == pas) {
              db.close();
              resolve(doc);
            } else {
              db.close();
              resolve("Неравильный пароль");
            }
          }
          db.close();
          resolve("Не существует такого логина");
        });
      });
    else resolve("Введите логин");
  });
}