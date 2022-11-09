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

const registar = (req, res) => {
    console.log(req.body);
    res.send('Enviado');

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