// se crea la clase para ser usada tanto por evento de mouse o teclado
class Buscador{
    constructor(datos){
        this.informacion = datos;
}
    buscar(busquedaUsuario){
        const resultado = this.informacion.filter(info =>
            info.titulo.toLowerCase().includes(busquedaUsuario.toLowerCase()))
            return resultado;
    }
    
}