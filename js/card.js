/*Array card index.html */
const programas = [
    {
        titulo:'Primaria',
        imagen:'images/primaria.jpg',
        descripcion:'Niveles comprendidos de jardin a quinto',
        enlace:'',

    },
    {
        titulo:'Secundaria',
        imagen:'images/secundaria.avif',
        descripcion:'Niveles comprendidos de sexto a once',
        Enlace:'',
    },
    {
        titulo:'Cursos vacacionales',
        imagen:'images/clasesvacacionales.jpg',
        descripcion:'Cursos de refuerzo',
        Enlace:'',
    }
    
];

let card = document.getElementById("contcard")

for(let i = 0; i < programas.length; i++){
    let creatarjeta = document.createElement("div");
        let titulo = document.createElement("h3");
        let imagen = document.createElement("img");
        let descripcion = document.createElement("p");
        // let enlace = document.createElement("a");  
        
        titulo.textContent = programas[i].titulo;
        imagen.setAttribute('src', programas[i].imagen);
        descripcion.textContent = programas[i].descripcion; 
        // enlace.setAttribute("href=matriculate.html", programas[i].enlace);

        creatarjeta.appendChild(titulo);
        creatarjeta.appendChild(imagen);
        creatarjeta.appendChild(descripcion);
        // creatarjeta.appendChild(enlace);
        card.appendChild(creatarjeta);
        
    
    

}