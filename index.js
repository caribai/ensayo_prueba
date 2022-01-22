const express = require("express");
const app = express();
const {getcustomers} = require("./consultas.js")

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000")
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})