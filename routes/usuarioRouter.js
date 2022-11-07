import express from 'express';
import { formularioLogin, formularioRegistro, formularioRestablecerPassword } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/restablecer', formularioRestablecerPassword ); 






export default router;