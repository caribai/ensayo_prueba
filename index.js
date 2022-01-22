const express = require("express");
const app = express();
const {getStores} = require("./consultas.js")

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000")
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/usuarios" && req.method == "GET") => {
    const stores = await getStores();
    res.end(JSON.stringify(stores))
}