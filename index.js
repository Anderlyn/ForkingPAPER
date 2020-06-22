const express = require("express");
const app = express();

let gatos = ["Manchas", "Siory"];

app.get("/cats", (req, res) => {
    res.send(gatos);
});

app.listen(3000, () => {
    console.log("API Conectada");
});