const express = require("express");
const app = express();
const {getStores,getCategories,getBrands} = require("./consultas.js")

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000")
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/stores", async function (req, res) {
    const stores = await getStores();
    res.end(JSON.stringify(stores))
});

app.get("/categories", async function (req, res) {
    const categories = await getCategories();
    res.end(JSON.stringify(categories))
});
app.get("/brands", async function (req, res) {
    const brands = await getBrands();
    res.end(JSON.stringify(brands))
});