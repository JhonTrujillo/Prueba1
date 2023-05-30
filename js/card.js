/*Array card index.html */
const programas = [
    {
        titulo:'Primaria',
        imagen:'images/primaria.jpg',
        descripcion:'niveles comprendidos de jardin a quinto',
        Enlace:'',
    },
    {
        titulo:'Secundaria',
        imagen:'images/secundaria.avif',
        descripcion:'niveles comprendidos de sexto a once',
        Enlace:'',
    },
    {
        titulo:'Cursos vacacionales',
        imagen:'images/clasesvacacionales.jpg',
        descripcion:'cursos de refuerzo',
        Enlace:'',
    }
];

let card = document.getElementById("contcard")

for(let i = 0; i < programas.length; i++){
    //crea titulo de la tarjeta
    let titulo = document.createElement("h3");
        titulo.textContent = programas[i].titulo;
        card.appendChild(titulo);
    //crea imagen de la tarjeta
    let imagen = document.createElement("img");
        imagen.setAttribute('src', programas[i].imagen);
        card.appendChild(imagen);
    //crea descripcion de la tarjeta
    let descripcion = document.createElement("p");    
        descripcion.textContent = programas[i].descripcion;
        card.appendChild(descripcion);
    //   crea itemcard
    //     let creatarjeta = document.createElement("div");
    //     creatarjeta.setAttribute('class', 'card');
    //     creatarjeta.innerHTML(programas[i].card);
    //     card.appendChild(creatarjeta);

}