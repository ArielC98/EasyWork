let datos = [];
const correo = 'radulh@ew.com';
const passwd = '09032002';
datos[2] = correo;
datos[3] = passwd;

function guardarDatos() {
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    /*let celular = document.getElementById('celular');
    let userDay = document.getElementById('userDay');
    let userMonth = document.getElementById('userMonth');
    let userYear = document.getElementById('userYear');*/

    const nombre = String(name.value);
    const apellido = String(lastname.value);
    correo = String(email.value);
    passwd = String(password.value);

    datos[0] = nombre;
    datos[1] = apellido;
    datos[2] = correo;
    datos[3] = passwd;
    alert('El usuario se ha registrado exitosamente!')
}

function iniciarSesion() {
    let emailLogin = document.getElementById('correo-login');
    let passwordLogin = document.getElementById('correo-registro');
    const emailL = String(emailLogin.value);
    const passwordL = String(passwordLogin.value);

    if (emailL == datos[2] && passwordL == datos[3]) {
        let ingreso = document.getElementById('ingresar').href;
        ingreso = './index.html'
    }
    else {
        alert('Correo y/o contraseña incorrecta!');
    }
}

