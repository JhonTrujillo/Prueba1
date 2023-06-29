const misNombres = document.getElementById("nombres");
const misApellidos = document.getElementById("apellidos");
const miDocumento = document.getElementById("identificacion");
const miCorreo = document.getElementById("correo");
const miUsuario = document.getElementById("usuario");
const miObservaciones = document.getElementById("observaciones");
const errorNombre = document.getElementById("error_nombres")
const errorApellido = document.getElementById("error_apellidos")
const errorCorreo = document.getElementById("error_correo")
const errorUsuario = document.getElementById("error_usuario")
const errorObservacion = document.getElementById("error_observaciones")
const errorVacios = document.getElementById("error_vacios")
const mensajeExito = document.getElementById("mensaje_exito")
//validar si las cajas de texto estan vacias
function validar(event) {
    event.preventDefault();
    if ((misNombres.value === "")
        || (misApellidos.value === "")
        || (miDocumento.value === "")
        || (miCorreo.value === "")
        || (miUsuario.value === "")
        || (miObservaciones.value === "")) {
        errorVacios.classList.add("block");
    } else {
        mensajeExito.classList.add("block")
        errorVacios.classList.remove("block");
    }

    validarNombres(misNombres);
    validarApellidos(misApellidos);
    validarCorreo(miCorreo);
    validarUsuario(miUsuario);
    validarObservaciones(miObservaciones);
}
// Validar nombres maximo 60 caracteres
function validarNombres() {
    const nombresRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (nombresRegex.test(misNombres.value)) {
        errorNombre.classList.remove("block");
        return true;
    } else {
        errorNombre.classList.add("block");
        // alert("sobrepasa los cantidad de caracteres permitidos para nombre");
        // return false;
    }
}
//validar apellidos maximo 60 caracteres
function validarApellidos() {
    const apellidosRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (apellidosRegex.test(misApellidos.value)) {
        errorApellido.classList.remove("block");
        return false;
    } else {
        errorApellido.classList.add("block");
        // alert("sobrepasa los cantidad de caracteres permitidos para apellido");
        return true;
    }
}
//valida el correo
function validarCorreo() {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (correoRegex.test(miCorreo.value)) {
        // alert("Correo valido");
        errorCorreo.classList.remove("block");
        return true;
    } else {
        // alert("Correo Invalido");
        errorCorreo.classList.add("block");
        return false;
    }
}
//validar usuario maximo 25 caracteres
function validarUsuario() {
    const usuarioRegex = /^([a-zA-Z0-9_-]{0,25})$/g;
    if (usuarioRegex.test(miUsuario.value)) {
        // alert("Usuario valido");
        errorUsuario.classList.remove("block");
        return true;
    } else {
        // alert("sobrepasa los cantidad de caracteres permitidos para usuario");
        errorUsuario.classList.add("block")
        return false;
    }
}
//validar observaciones maximo 200 caracteres
function validarObservaciones() {
    const observacionesRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,20})$/g;
    if (observacionesRegex.test(miObservaciones.value)) {
        // alert("Apellido valido");
        errorObservacion.classList.remove("block");
        return false;
    } else {
        errorObservacion.classList.add("block");
        // alert("sobrepasa los cantidad de caracteres permitidos para observaciones");
        return true;
    }
}




