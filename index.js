const express = require("express");

const cors = require("cors");
const router = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// Si es necesario, se configura acá también el dotenv

// El string de conexión debe estar siempre protegido en el .env
const mongoUri = process.env.URIDB;

require("./database/index.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.set("PORT", process.env.PORT || 5000);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});
