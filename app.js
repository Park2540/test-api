const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var mqtt = require("mqtt");
const { json } = require("body-parser");
var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyARkPVAsOxQcw5qIQIuf30O2_aCfM0MW3g",
  authDomain: "test-data-1856c.firebaseapp.com",
  projectId: "test-data-1856c",
  storageBucket: "test-data-1856c.appspot.com",
  messagingSenderId: "427216417699",
  appId: "1:427216417699:web:a7e69f6aa5121f56232016",
  measurementId: "G-WN1VNFK8CE",
  databaseURL:
    "https://test-data-1856c-default-rtdb.asia-southeast1.firebasedatabase.app",
};

app.use(bodyParser.urlencoded({ extended: "fales" }));
app.use(bodyParser.json());
var client = mqttClient();

// การแสดง///////////////////////////////////////////////////////////////////
app.get("SoilTemp", (req, FUCK) => {
  /*if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }
  let database = firebase.database();
  database.ref("/").set({ temp: 100 }, function (error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("success");
    }
  });
  const data = JSON.stringify({
    sensor: req.params.sensor,
    status: req.body.status,
  });
  client.publish("SERVER/*", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.json({
    status: 200,
    data: "publish ok",
    debug: data,
    sensor: "ACC",
  });*/
  FUCK.send("hello world")
  client.on("message", function (topic, message) {


  });
});
/////////////////////////////////////////////////////////////
//การส่งค่า
app.post("/setting/off", (req, res) => {
  const data = JSON.stringify({
    sensor: req.body.sensor,
    status: req.body.status,
  });
  client.publish("client/mcu01", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    status: 200,
    data: "publish ok",
    debug: data,
    sensor: "ACC",
  });
});
//เปิิดปิดโซน
app.post("/setting/on", (req, res) => {
  const data = JSON.stringify({
    sensor: req.body.sensor,
    status: req.body.status,
  });
  client.publish("client/mcu02", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    status: 200,
    sensor: "A",
  });
});
app.post("/setting/on2", (req, res) => {
  const data = JSON.stringify({
    sensor: req.body.sensor,
    status: req.body.status,
  });
  client.publish("client/mcu03", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    status: 200,
    sensor: "A",
  });
});
//
app.put("/setting/time1", (req, res) => {
  const data = JSON.stringify({
    number: req.body.number,
  });
  client.publish("client/mcu04", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    //number: "005",
    number: req.body.number,
  });
});

app.put("/setting/time2", (req, res) => {
  const data = JSON.stringify({
    number2: req.body.number2,
  });
  client.publish("client/mcu05", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    number2: "0002",
  });
});

//การอัปเดต
app.put("/setting/:sensor", (req, res) => {
  const data = JSON.stringify({
    sensor: req.params.sensor,
    status: req.body.status,
  });
  client.publish("client/mcu*", data, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    }
  });
  res.status(201);
  res.json({
    status: 200,
    data: "publish ok",
    debug: data,
    sensor: "ACC",
  });
});

//server
app.listen(3000, () => {
  console.log("Start server at port 3000.");
});

//mqtt
function mqttClient() {
  const MQTT_SERVER = "13.212.192.69";
  const MQTT_PORT = "1883";
  //if your server don't have username and password let blank.
  const MQTT_USER = "username";
  const MQTT_PASSWORD = "0987654321";
  const MQTT_SUB = ["#"];

  var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD,
  });
  client.on("connect", function () {
    // Subscribe any topic
    console.log(`Connect MQTT user ${MQTT_USER}`);
    // client.
    client.subscribe(MQTT_SUB, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });

  /*client.on("message", function (topic, message) {
    // message is Buffer
    // console.log("topic : ", topic)

   
    if (topic == "SERVER/01") {
      console.log(topic);
      var payload = JSON.parse(message);
      console.log(payload);

    } 
    if (topic == "SERVER/02") {
      console.log(topic);
      var payload = JSON.parse(message);
      console.log(payload);




    } 
    
    else {
      
    }
    





    






    
  });*/

  return client;
}
