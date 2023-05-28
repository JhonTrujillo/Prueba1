/*Array card index.html */
const programas = [
    {
        titulo:'Primaria',
        imagen:'',
        descripcion:'niveles comprendidos de jardin a quinto',
        Enlace:'',
    },
    {
        titulo:'Secundaria',
        imagen:'',
        descripcion:'niveles comprendidos de sexto a once',
        Enlace:'',
    },
    {
        titulo:'Cursos vacacionales',
        imagen:'',
        descripcion:'cursos de refuerzo',
        Enlace:'',
    }
];

let card = document.getElementById("card")

for(let i = 0; i < programas.length; i++){
    let titulo = document.createElement("h3");
        titulo.textContent = programas[i].titulo;
        card.appendChild(titulo)
    let descripcion = document.createElement("p");    
        descripcion.textContent = programas[i].descripcion;
        card.appendChild(descripcion)

}