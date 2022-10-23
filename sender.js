var mqtt = require('mqtt');
const MQTT_SERVER = "13.212.192.69";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
const MQTT_USER = "username"; 
const MQTT_PASSWORD = "0987654321";
const MQTT_SUB = ["server/#"]

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log(`Connect MQTT user ${MQTT_USER}`);
    // client.
    client.subscribe(MQTT_SUB, function (err) {
        if (err) {
            console.log(err);
        }
    });
});



// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    // console.log("topic : ", topic)
    if(topic === "ESP_TO_FRONT_1" ){
        console.log("is ESP_TO_FRONT_1 ....")
        var payload = JSON.parse(message.toString())
        console.log(payload)
    } else{
        console.log("is ESP_TO_FRONT_2 ....")
        var payload = JSON.parse(message.toString())
        console.log(payload)
    }
});

//  client/mcu01,
//  client/mcu02

setInterval(() => {
    // Sender Message
    client.publish("client/mcu01", 
    `{
        "sensor": "AA",
        "status": "OOFF"
    }`
    , { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
    })

}, 5000);

setInterval(() => {
    // Sender Message
    client.publish("client/mcu02", 
    `{
        "sensor": "B",
        "status": "on"
    }`
    , { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
    })

}, 5000);


setInterval(() => {
    // Sender Message
    client.publish("client/mcu*", 
    `{
        "sensor": "AB",
        "status": "on"
    }`
    , { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
    })

}, 5000);