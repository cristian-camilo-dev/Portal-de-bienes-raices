import express from "express";
import usuarioRouter from "./routes/usuarioRouter.js";


//crear app
const app = express();

//rutas
app.use('/', usuarioRouter);


//Defenir el puerto
const port = 3000;









//arrancar el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto  http://localhost:${port}`);
});