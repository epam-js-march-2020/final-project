const dateFns = require("date-fns")
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("static"));
app.set("port", process.env.PORT || 80);

const mongodb = require("mongodb");
const dburl = "mongodb://Admin:-9wm4GEKqnEnRq@ds062818.mlab.com:62818/haircut";
const mongo = mongodb.MongoClient;

const { ObjectId } = require("mongodb");
const sha1 = require("sha1");
const cryptoRandomString = require("crypto-random-string");

const sessionToken = "22a3891a1de567cefc14b031f7f3910eae279424"; //sessionToken only for example,it must be unique
//     getSha1000Times(
//   cryptoRandomString({
//     length: Math.floor(Math.random() * 100) + 15,
//   })
// );
cookieParser = require("cookie-parser");
app.use(cookieParser());
let server = app.listen(app.get("port"), function () {
  //identification

  console.log(
      "Сервер запущен на  http://localhost:" +
      app.get("port") +
      "  Ctrl-C to terminate"
  );
});
app.get("/api/services", function (req, res) {
  getDb("services").then((value) => res.json(value));
});

app.get("/api/masters", function (req, res) {
  getDb("masters").then((value) => res.json(value));
});
app.get("/api/masters/:id", function (req, res) {
  getElementInDB("masters", req.params.id).then((value) => res.json(value));
});
app.put("/api/appointments", function (req, res) {
  const {
    selectedMasterID,
    serviceID,
    date,
    time,
    masterNameSurname,
    serviceName,
    servicePrice,
  } = req.query;
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        mongo.connect(dburl, function (err, db) {
          let newAppointment = {
            masterID: parseInt(selectedMasterID),
            masterNameSurname: masterNameSurname,
            userID: parseInt(user.id),
            serviceID: parseInt(serviceID),
            serviceName: serviceName,
            servicePrice: servicePrice,
            date: date,
            time: time,
            isCanceled: false,
          };
          db.collection("appointment").insertOne(newAppointment, function (
              err,
              result
          ) {
            if (err) throw err;
            console.log("new Appointment " + newAppointment);
            db.close();
            res.json(newAppointment);
          });
        });
      })
      .catch((error) => {
        res.json(error);
      });
});

app.get("/api/appointments/search-by-mater-date", function (req, res) {
  const { selectedMasterID, date, serviceID } = req.query;
  mongo.connect(dburl, function (err, db) {
    db.collection("appointment")
        .find({masterID: parseInt(selectedMasterID), date: date})
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          let busyTime = [];
          result.map(function (e) {
            if (!e.isCanceled) busyTime.push(e.time);
          });
          res.json(busyTime);
        });
  });
});

app.delete("/api/appointment/delete/:id", function (req, res) {
  const { id } = req.params;
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        mongo.connect(dburl, function (err, db) {
          db.collection("appointment").findOneAndUpdate(
              {_id: ObjectId(id)},
              {$set: {isCanceled: true}},
              {returnOriginal: false},
              function (err, doc) {
                if (err) {
                  throw err;
                } else {
                  res.json("removed");
                }
              }
          );
        });
      })
      .catch((reason) => {
        res.send(reason);
      });
});

app.get("/api/appointments/search-by-user", function (req, res) {
  const { userID } = req.query;
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        mongo.connect(dburl).then(function (db) {
          db.collection("appointment")
              .find({userID: parseInt(user.id)})
              .toArray(function (err, result) {
                if (err) throw err;
                db.close();
                const sortedArr = result.sort((a, b) =>
                    dateFns.set(dateFns.parse(b.date, "dd.MM.yyyy", new Date()), {
                      hours: b.time.substr(0, 2),
                      minutes: b.time.slice(-2)
                    })
                    - dateFns.set(dateFns.parse(a.date, "dd.MM.yyyy", new Date()), {
                      hours: a.time.substr(0, 2),
                      minutes: a.time.slice(-2)
                    })
                )

                res.json(sortedArr.reverse());
              });
        });
      })
      .catch((reason) => {
        res.send(reason);
      });
});

app.get("/api/services/:id", function (req, res) {
  getElementInDB("services", req.params.id).then((value) => {
    res.json(value);
  });
});

app.post("/api/registration", function (req, res) {
  const { login, password } = req.body;
  checkUserExistAndReturnNew(login)
      .then((newId) => {
        const hashedPassword = hashPassword(password);
        const newUser = {
          id: parseInt(newId),
          login: login,
          password: hashedPassword.hashedSaltedPassword,
          salt: hashedPassword.salt,
          name: "",
          surname: "",
          email: "",
          phone: "",
          data_created: new Date().toISOString(),
          last_login: new Date().toISOString(),
        };
        mongo.connect(dburl, function (err, db) {
          db.collection("users").insertOne(newUser, function (error, response) {
            if (error) {
              console.log("Error occurred while inserting");
              // return
            } else {
              console.log("New user ", response.ops[0]);
              response.ops[0].password = password;
              delete response.ops[0]["salt"];
              res.cookie("_id=" + response.ops[0]._id + "; HttpOnly");
              res.cookie("sessionToken=" + sessionToken + "; HttpOnly"); //sessionToken only for example,it must be unique
              res.json(response.ops[0]);
            }
          });
        });
      })
      .catch((error) => {
        res.json(error);
      });
});

app.post("/api/runtime", function (req, res) {
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        res.cookie("_id=" + user._id + "; HttpOnly");
        res.cookie("sessionToken=" + sessionToken + "; HttpOnly"); //sessionToken only for example,it must be unique
        res.json(user);
      })
      .catch((error) => {
        console.log(error);
        res.json({});
      });
});

app.post("/api/login", function (req, res) {
  const { login, password } = req.body;
  checkUserLogPas(login, password)
      .then((result) => {
        mongo.connect(dburl, function (err, db) {
          db.collection("users").findOneAndUpdate(
              {_id: result._id},
              {$set: {last_login: new Date().toISOString()}}
          );
        });
        res.cookie("_id=" + result._id + "; HttpOnly");
        res.cookie("sessionToken=" + sessionToken + "; HttpOnly"); //sessionToken only for example,it must be unique
        res.json(removePasswordAndSalt(result));
      })
      .catch((error) => {
        res.json(error);
      });
});

app.post("/api/logout", function (req, res) {
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        res.clearCookie("_id");
        res.clearCookie("sessionToken");
        res.json("logout");
      })
      .catch((error) => {
        res.json(error);
      });
});

app.put("/api/update-profile", function (req, res) {
  const { name, surname, phone, email } = req.query;
  const { sessionToken, _id } = req.cookies;
  checkSessionToken(_id, sessionToken)
      .then((user) => {
        mongo.connect(dburl, function (err, db) {
          db.collection("users")
              .findOneAndUpdate(
                  {_id: ObjectId(_id)},
                  {
                    $set: {
                      name: name,
                      surname: surname,
                      phone: phone,
                      email: email,
                    },
                  },
                  {returnOriginal: false}
              )
              .then((doc) => {
                res.json(removePasswordAndSalt(doc.value));
              });
        });
      })
      .catch((error) => {
        res.json(error);
      });
});

function checkUserLogPas(login, password) {
  return new Promise((resolve, reject) => {
    if (login != "")
      mongo.connect(dburl, function (err, db) {
        db.collection("users").findOne({ login: login }, function (err, doc) {
          db.close();
          if (doc) {
            if (checkUserPassword(doc.password, doc.salt, password)) {
              resolve(doc);
            } else {
              reject("Неравильный пароль");
            }
          }
          reject("Не существует такого логина");
        });
      });
    else reject("Введите логин");
  });
}

function checkUserExistAndReturnNew(login) {
  return new Promise((resolve, reject) => {
    if (login != "")
      mongo.connect(dburl, function (err, db) {
        let newId;
        db.collection("users")
            .find()
            .sort([["id", -1]])
            .limit(1)
            .toArray((err, docs) => {
              if (docs.length > 0) {
                newId = docs[0].id + 1;
              } else console.log("Nothing found!");
            });
        db.collection("users").findOne({login: login}, function (err, doc) {
          db.close();
          if (doc) {
            reject("Логин занят");
          } else resolve(newId);
        });
      });
    else reject("Введите логин");
  });
}

function hashPassword(password) {
  const salt = cryptoRandomString({
    length: Math.floor(Math.random() * 100) + 15,
  });
  const saltedPassword = password + salt;
  const hashedSaltedPassword = getSha1000Times(saltedPassword);
  return { salt: salt, hashedSaltedPassword: hashedSaltedPassword };
}

function getSha1000Times(saltedPassword) {
  let hashedSaltedPassword = saltedPassword;
  for (let i = 0; i < 1000; i++) {
    hashedSaltedPassword = sha1(hashedSaltedPassword);
  }
  return hashedSaltedPassword;
}

function checkUserPassword(userPass, userSalt, checkingPass) {
  const saltedPassword = checkingPass + userSalt;
  const hashedSaltedPassword = getSha1000Times(saltedPassword);
  return hashedSaltedPassword === userPass;
}

function checkSessionToken(id, token) {
  return new Promise((resolve, reject) => {
    if (id)
      if (token == sessionToken)
        mongo.connect(dburl, function (err, db) {
          db.collection("users").findOne({ _id: ObjectId(id) }, function (
              err,
              doc
          ) {
            db.close();
            if (doc) {
              resolve(doc);
            }
          });
        });
      else reject("wrong Token");
    else reject("empty ID");
  });
}

function getDb(dbName) {
  return new Promise((resolve, reject) => {
    mongo.connect(dburl, function (err, db) {
      db.collection(dbName)
          .find()
          .toArray(function (err, results) {
            db.close();
            resolve(results);
          });
    });
  });
}

function getElementInDB(dbName, eleemntID) {
  return new Promise((resolve, reject) => {
    mongo.connect(dburl, function (err, db) {
      db.collection(dbName).findOne({ id: parseInt(eleemntID) }, function (
          err,
          doc
      ) {
        resolve(doc);
        db.close();
      });
    });
  });
}

function removePasswordAndSalt(a) {
  delete a["password"];
  delete a["salt"];
  return a;
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

//admin api not ready

app.post("/adminLogin", function (req, res) {
  if (checkAdminLoginPas(req.body.login, req.body.password)) {
    mongo.connect(dburl, function (err, db) {
      let allCollections = [];
      db.listCollections().toArray(function (err, collInfos) {
        collInfos.map((eachCollectionDetails) => {
          allCollections.push(eachCollectionDetails.name);
        });
        res.json(allCollections);
      });
    });
  } else res.json(false);
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
app.get("/collection/:name", function (req, res) {
  console.log(req.params.name);
  mongo.connect(dburl, function (err, db) {
    db.collection(req.params.name)
        .find()
        .toArray(function (err, results) {
          console.log(results);
          res.json(results);
          db.close();
        });
  });
});

function checkAdminLoginPas(login, pas) {
  return login === "admin" && pas === "admin";
}
