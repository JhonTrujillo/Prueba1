//validar si las cajas de texto estan vacias
function validar() {
    const misNombres = document.getElementById("nombres");
    const misApellidos = document.getElementById("apellidos");
    const miCorreo = document.getElementById("correo");
    const mitelefono = document.getElementById("telefono");
    if ((misNombres.value === "") || (misApellidos.value === "") || (miCorreo.value === "") || (mitelefono.value === "")) {
        alert("Hay campos vacios");
        // return;
    }
    validarCorreo(miCorreo);
}

function validarCorreo() {
    const miCorreo = document.getElementById("correo");
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (correoRegex.test(miCorreo.value)) {
        // alert("Correo valido");
        return true;
    } else {
        alert("Correo Invalido");
        return false;
    }
}

// function validarCorreo(cadena){
//  const miCorreo = document.getElementById("correo");
//  const correoRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//  const correoRegex = (/^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g);
//  const emailRegex = /^([a-z0-9]+)([@])([a-z]+)([.])([a-z]{2,3})$/g;
//  if (!cadena.match(correoRegex)){
//      alert("Correo invalido");
//      return;
//  }
// }





