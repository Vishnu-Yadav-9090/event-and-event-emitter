const express = require("express");
const app = express();
const EventEmitter = require("events");
const event = new EventEmitter();
let count = 0;

event.on("count",()=>{
    count++
    console.log("count",count)
})

app.get("/",(res,resp)=>{
    resp.send("api is called");
    event.emit("count");
})
app.listen(4000);