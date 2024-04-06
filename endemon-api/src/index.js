import express from 'express';
//const express = require("express");
import cors from 'cors';
const app = express();

//import the routes
import routerCasos from './routes/casos.js';
import routerUsuarios from './routes/usuarios.js';

app.use(express.json());
app.use(cors());

//configure the app.
app.get("/", (req, res) => {
  res.send("Endemon-API");
});

//configure the app.
app.use(routerCasos);
app.use(routerUsuarios);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});