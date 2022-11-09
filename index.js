import express from "express";
import usuarioRouter from "./routes/usuarioRouter.js";
import db from "./config/db.js";

//crear app
const app = express();

//conectar a la base de datos

try {
  await db.authenticate();
  console.log("Conectado a la base de datos");
} catch (error) {
  console.log(error);
  console.log("Error al conectar a la base de datos");
  
}

//habilitar datos de formulario
app.use(express.urlencoded({ extended: true }));

/*habilitar pug 
.set es un metodo de express para configurar cosas de express
(como el motor de plantillas)*/
app.set("view engine", "pug");
app.set("views", "./views");

//habilitar carpeta publica
app.use(express.static("public"));



//rutas
app.use('/auth', usuarioRouter);


//Defenir el puerto
const port = 3000;









//arrancar el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto  http://localhost:${port}`);
});