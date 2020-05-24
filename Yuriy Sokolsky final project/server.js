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

const moment = require("moment");

const sha1 = require("sha1");
const cryptoRandomString = require("crypto-random-string");

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

app.get("/mastersList", function (req, res) {
  mongo.connect(dburl, function (err, db) {
    db.collection("masters")
      .find()
      .toArray(function (err, results) {
        db.close();
        res.json(results);
      });
  });
});

app.post("/AppointmentsByMasterDateAndTime", function (req, res) {
  const { selectedMasterID, date, serviceID } = req.body;
  mongo.connect(dburl, function (err, db) {
    db.collection("appointment").findOne(
      { masterID: parseInt(selectedMasterID) },
      function (err, results) {
        db.close();
        let resArr = [];
        if (results)
          if (results)
            results.users.map(function (user) {
              let serviceInUser = user.services.find(
                (x) => parseInt(x.serviceID) === parseInt(serviceID)
              );
              if (serviceInUser) {
                let dateInserviceInUser = serviceInUser.date.find(
                  (x) => x.date === date
                );
                if (dateInserviceInUser) resArr.push(dateInserviceInUser.times);
              }
            });
        res.json(resArr);
      }
    );
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

app.post("/registration", function (req, res) {
  const { login, password } = req.body;
  checkUserExist(login)
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
        data_created: moment().format(),
        last_login: moment().format(),
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
            res.json(response.ops[0]);
            // return
          }
        });
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

function checkAdminLoginPas(login, pas) {
  if (login === "admin" && pas === "admin") {
    return true;
  } else return false;
}
app.post("/login", function (req, res) {
  const { login, password } = req.body;
  checkUserLogPas(login, password)
    .then((result) => {
      mongo.connect(dburl, function (err, db) {
        db.collection("users").findOneAndUpdate(
          { _id: result._id },
          { $set: { last_login: moment().format() } }
        );
      });
      delete result["password"];
      result.password = password;
      delete result["salt"];
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.post("/updateProfile", function (req, res) {
  const { login, password } = req.body;
  const { name, surname, phone, email } = req.body;
  checkUserLogPas(login, password)
    .then((result) => {
      mongo.connect(dburl, function (err, db) {
        db.collection("users")
          .findOneAndUpdate(
            { _id: result._id },
            {
              $set: {
                name: name,
                surname: surname,
                phone: phone,
                email: email,
              },
            },
            { returnOriginal: false }
          )
          .then((doc) => {
            delete doc.value["password"];
            doc.value.password = password;
            delete doc.value["salt"];
            res.json(doc.value);
          });
      });
    })
    .catch((error) => {
      res.json(error);
    });
});
app.post("/sendNewAppointment", function (req, res) {
  console.log(req.body);
  const {
    userLogin,
    userPassword,
    selectedMasterID,
    serviceID,
    date,
    time,
  } = req.body;
  checkUserLogPas(userLogin, userPassword)
    .then((user) => {
      new Promise((resolve, reject) => {
        mongo.connect(dburl, function (err, db) {
          db.collection("appointment").findOne(
            { masterID: parseInt(selectedMasterID) },
            function (err, results) {
              db.close();
              console.log(results);
              if (results) {
                let userIDinMaster = results.users.findIndex(
                  (x) => parseInt(x.userID) === parseInt(user.id)
                );

                if (userIDinMaster >= 0) {
                  let serviceIDinUser = results.users[
                    userIDinMaster
                  ].services.findIndex(
                    (x) => parseInt(x.serviceID) === parseInt(serviceID)
                  );
                  if (serviceIDinUser >= 0) {
                    let dateIDinService = results.users[
                      userIDinMaster
                    ].services[serviceIDinUser].date.findIndex(
                      (x) => x.date === date
                    );
                    if (dateIDinService >= 0) {
                      results.users[userIDinMaster].services[
                        serviceIDinUser
                      ].date[dateIDinService].times.push({ timeStart: time });

                      db.close();
                    } else {
                      console.log("create date");
                      results.users[userIDinMaster].services[
                        serviceIDinUser
                      ].date.push({ date: date, times: [{ timeStart: time }] });
                    }
                  } else {
                    console.log("create service");
                    results.users[userIDinMaster].services.push({
                      serviceID: parseInt(serviceID),
                      date: [{ date: date, times: [{ timeStart: time }] }],
                    });
                  }
                } else {
                  console.log("create user at master");
                  results.users.push({
                    userID: parseInt(user.id),
                    services: [
                      {
                        serviceID: parseInt(serviceID),
                        date: [{ date: date, times: [{ timeStart: time }] }],
                      },
                    ],
                  });
                }
              } else {
                console.log("Created new Master");
                reject("Created new Master");
              }
              resolve(results);
            }
          );
        });
      })
        .then((value) => {
          mongo.connect(dburl, function (err, db) {
            db.collection("appointment").replaceOne(
              {
                masterID: value.masterID,
              },
              {
                masterID: value.masterID,
                users: value.users,
              }
            );
          });
          res.json(true);
        })
        .catch((error) => {
          mongo.connect(dburl, function (err, db) {
            db.collection("appointment").insertOne({
              masterID: parseInt(selectedMasterID),
              users: [
                {
                  userID: parseInt(user.id),
                  services: [
                    {
                      serviceID: parseInt(serviceID),
                      date: [
                        {
                          date: date,
                          times: [
                            {
                              timeStart: time,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            });
          });
          res.json(true);
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

function checkUserExist(login) {
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
        db.collection("users").findOne({ login: login }, function (err, doc) {
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