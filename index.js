import express from "express";
import usuarioRouter from "./routes/usuarioRouter.js";

//crear app
const app = express();

/*habilitar pug 
.set es un metodo de express para configurar cosas de express
(como el motor de plantillas)*/
app.set("view engine", "pug");
app.set("views", "./views");



//rutas
app.use('/auth', usuarioRouter);


//Defenir el puerto
const port = 3000;









//arrancar el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto  http://localhost:${port}`);
});