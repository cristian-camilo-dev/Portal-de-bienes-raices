import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear Cuenta",
  });
};

const registar = async (req, res) => {
  //validar los datos
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede ir vacio")
    .run(req);
  await check("email")
    .isEmail()
    .withMessage("El email no puede ir vacio")
    .run(req);
  await check("password")
    .isLength({ min: 6 })
    .withMessage("El password debe ser de al menos 6 caracteres")
    .run(req);
  await check("repetir_password")
    .equals("password")
    .withMessage("Los passwords no coinciden")
    .run(req);
  let resultado = validationResult(req);

  //verificar que el resultado no tenga errores

    //condicional que valida si el resultado tiene errores y si los tiene los muestra en la vista 

  if (!resultado.isEmpty()) {
    res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
      usuario : {
        nombre: req.body.nombre,
        email: req.body.email,
      }

    });
    return;
  }

  res.json(resultado.array());

  const usuario = await Usuario.create(req.body);
  console.log(usuario);
  res.json(usuario);
};

const formularioRestablecerPassword = (req, res) => {
  res.render("auth/restablecer", {
    pagina: "Restablecer Contraseña",
  });
};

export {
  formularioLogin,
  formularioRegistro,
  registar,
  formularioRestablecerPassword,
};
