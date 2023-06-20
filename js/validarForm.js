const misNombres = document.getElementById("nombres");
const misApellidos = document.getElementById("apellidos");
// const miDocumento = document.getElementById("identificacion");
const miCorreo = document.getElementById("correo");
const miTelefono = document.getElementById("telefono");
// const miUsuario = document.getElementById("usuario");
const miObservaciones = document.getElementById("observaciones");

//validar si las cajas de texto estan vacias
function validar() {
    if ((misNombres.value === "")
        || (misApellidos.value === "")
        || (miCorreo.value === "")
        || (miTelefono.value === "")
        || (miObservaciones.value === "")) {
        alert("Hay campos vacios");
        // return;
    }
    validarNombres(misNombres);
    validarApellidos(misApellidos);
    validarCorreo(miCorreo);
    
    validarObservaciones(miObservaciones);
}
// Validar nombres maximo 60 caracteres
function validarNombres() {
    const nombresRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (nombresRegex.test(misNombres.value)) {
        // alert("Nombres valido");
        return true;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para nombre");
        return false;
    }
}
//validar apellidos maximo 60 caracteres
function validarApellidos() {
    const apellidosRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (apellidosRegex.test(misApellidos.value)) {
        // alert("Apellido valido");
        return false;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para apellido");
        return true;
    }
}
//valida el correo
function validarCorreo() {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (correoRegex.test(miCorreo.value)) {
        // alert("Correo valido");
        return true;
    } else {
        alert("Correo Invalido");
        return false;
    }
}
//validar usuario maximo 25 caracteres
// function validarUsuario() {
//     const usuarioRegex = /^([a-zA-Z0-9_-]{0,25})$/g;
//     if (usuarioRegex.test(miUsuario.value)) {
//         // alert("Usuario valido");
//         return true;
//     } else{
//         alert("sobrepasa los cantidad de caracteres permitidos para usuario");
//         return false;
//     }
// }
//validar observaciones maximo 200 caracteres
function validarObservaciones() {
    const observacionesRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,20})$/g;
    if (observacionesRegex.test(miObservaciones.value)) {
        // alert("Apellido valido");
        return false;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para observaciones");
        return true;
    }
}








