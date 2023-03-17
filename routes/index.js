const express = require("express");
const prueba = require("../controllers");

const router = express.Router();

router.get("/prueba", async (req, res) => {
  res.json({ exito: "si", mensaje: "soy el get de prueba" });
});

router.post("/pruebaPost", async (req, res) => {
  let respuesta = await prueba.post(req.body);
  res.json(respuesta);
});

module.exports = router;
