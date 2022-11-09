import express from 'express';
import { formularioLogin, formularioRegistro, formularioRestablecerPassword, registar  } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);


router.get('/registro', formularioRegistro);
router.post('/registro', registar );


router.get('/restablecer', formularioRestablecerPassword ); 






export default router;