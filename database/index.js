const mongoose = require("mongoose");
// Si es necesario, se configura acá también el dotenv
const dotenv = require("dotenv");
dotenv.config();
// El string de conexión debe estar siempre protegido en el .env
const mongoUri = process.env.URIDB;

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB conectada");
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });
