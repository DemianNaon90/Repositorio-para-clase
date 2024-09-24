let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = "";
    for(let i=0; i < numeroDigitado; i++ ){       
        let caracterAleatorio = cadenaDeCaracteres [Math.floor (Math.random() * cadenaDeCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;
    }
contrasena.value = password;
validarContrasena(password);
}

function limpiar(){
    contrasena.value = '';
    mensaje.textContent = '';
}
function validarContrasena(password){
    let Mayuscula = /[A-Z]/.test(password);
    let Minuscula = /[a-z]/.test(password);
    let Numero = /[0-9]/.test(password);
    let CaracterEspecial = /[!@#$%^&*()]/.test(password);

    if(Mayuscula && Minuscula && Numero && CaracterEspecial){
        mensaje.textContent = 'Contraseña fuerte';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Contraseña débil: debe incluir mayúsculas, minúsculas, números y caracteres especiales.';
        mensaje.style.color = 'red';
    }
}


