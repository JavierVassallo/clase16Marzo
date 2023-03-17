const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));

const productosSchema = new mongoose.Schema({
  name: String,
  codigo: Number,
  precio: {
    type: Number,
    required: true,
  },
  uso: String,
});

const Producto = mongoose.model("productos", productosSchema);
/*
const queso = new Producto({
  name: "pileta",
  codigo: 578965,
  precio: 5444,
  uso: "guardar productos",
});

queso.save().then(() => {
  console.log("se guardo el producto");
});*/

let buscar = async (nombre) => {
  return await mongoose.model("productos").find({ name: nombre });
};
let busqueda = buscar("pileta").then((res) => {
  console.log(res);
});

// mongodb+srv://jevvassallo:TL.$$N$qAs$Z37A@cluster0.swlr1ui.mongodb.net/?retryWrites=true&w=majority
