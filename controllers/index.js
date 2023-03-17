let prueba = {};
const userModel = require("../models");
prueba.post = async (body) => {
  const user = new userModel({ name: "asojdnas", age: 12 });

  try {
    await user.save();
    if (body.pass === "123456") {
      return { exito: "si", mensaje: "ustede se logueo correctamente" };
    } else {
      return { exito: "no", mensaje: "pass no valida" };
    }
  } catch (error) {}
};

module.exports = prueba;
