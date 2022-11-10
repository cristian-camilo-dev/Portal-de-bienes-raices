import Usuario from '../models/Usuario.js';

const formularioLogin = (req, res) => {
    res.render('auth/login',{
        pagina: 'Iniciar Sesión'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    });
}

const registar = async (req, res) => {
    const usuario =  await Usuario.create(req.body);
    console.log(usuario);
    res.json(usuario);

}


const formularioRestablecerPassword = (req, res) => {
    res.render('auth/restablecer',{
        pagina: 'Restablecer Contraseña'
    });
}





export{
    formularioLogin,
    formularioRegistro,
    registar,
    formularioRestablecerPassword
}