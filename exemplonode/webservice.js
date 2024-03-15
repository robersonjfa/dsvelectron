
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

// importa a biblioteca db, módulo getTabelas

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao servidor!" });
});

app.get("/dados", (req, res) => {
    res.json({ pessoa: "Dados da pessoa" });
});


app.get("/inserepessoa/:nome", (req, res) => {
    res.json({ insercao: 
        `Inserção da pessoa ${req.params.nome} realizada com sucesso!` });
});

app.get("/listatabelas", db.getTabelas);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});