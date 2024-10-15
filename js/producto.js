










// Que los botones ver más de la Home redirijan a producto.html.
// Crear una clase producto con propiedades: titulo, detalle, precio, stock, imagen.
// Crear un objeto como instancia de clase.
// Asignar a una variable etiquetas HTML que incluyan las propiedades del objeto.
// Insertar el contenido de la variable en el main de producto.html con innerHTML.



/*class Producto {
    constructor (titulo, detalle, precio, stock, imagen)
    {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

}

const objeto = new Producto("mustang fachero", "el auto mas rapido", 1900, 20, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

let etiquetas = `<div>
<h1> El auto mas vendido </h1>
<h2> Titulo ${objeto.titulo} </h2>
<h2> Detalles ${objeto.detalle} </h2>
<h2> Precio USD ${objeto.precio} </h2>
<h2> stock ${objeto.stock} </h2>
<h2> imagen <img src="${objeto.imagen}" widht="300" height="300"> </h2>
</div>
`;
*/
const data = [{
    id: 1,
    persona: "Manolo Bootherstone",
    tipo: "Cost Accountant",
    descripcion: "Muy buen tipo",
    lugar: "China",
    fecha: "2/25/2026",
    precio: "$3896.63",
    available: 3
  }, {
    id: 2,
    persona: "Belia Poulsen",
    tipo: "Web Developer II",
    descripcion: "Medio malo",
    lugar: "China",
    fecha: "5/15/2026",
    precio: "$1382.63",
    available: 3
  }, {
    id: 3,
    persona: "Cecelia Vuittet",
    tipo: "Community Outreach Specialist",
    descripcion: "Ahora a disfrutar",
    lugar: "China",
    fecha: "11/12/2026",
    precio: "$4913.81",
    available: 3
  }, {
    id: 4,
    persona: "Amanda Wyldes",
    tipo: "Senior Quality Engineer",
    descripcion: "Una noche de maquillaje",
    lugar: "Sweden",
    fecha: "9/14/2025",
    precio: "$4865.34",
    available: 3
  }, {
    id: 5,
    persona: "Fabian Goodbarr",
    tipo: "Staff Accountant II",
    descripcion: "No hay lugar para silencios",
    lugar: "Russia",
    fecha: "1/22/2025",
    precio: "$4033.58",
    available: 3
  }, {
    id: 6,
    persona: "Miran Skirling",
    tipo: "Occupational Therapist",
    descripcion: "El cantante del momento",
    lugar: "China",
    fecha: "5/2/2026",
    precio: "$3166.95",
    available: 3
  }, {
    id: 7,
    persona: "Sylas Becket",
    tipo: "Programmer Analyst II",
    descripcion: "Deja lejos a tus mascotas",
    lugar: "Russia",
    fecha: "8/22/2026",
    precio: "$3220.01",
    available: 3
  }, {
    id: 8,
    persona: "Derwin Graben",
    tipo: "Senior Financial Analyst",
    descripcion: "A cocinar algo rico",
    lugar: "Thailand",
    fecha: "4/21/2026",
    precio: "$4083.75",
    available: 3
  }, {
    id: 9,
    persona: "Shelley Grenshiels",
    tipo: "Nurse",
    descripcion: "Unas siestitas juntos",
    lugar: "Peru",
    fecha: "6/8/2025",
    precio: "$2858.92",
    available: 3
  }, {
    id: 10,
    persona: "Elsa Ettritch",
    tipo: "Engineer I",
    descripcion: "Ciencia? es por aqui",
    lugar: "Japan",
    fecha: "7/29/2025",
    precio: "$682.81",
    available: 3
  }];

function cards() {
let main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const evento = data.find((data) => data.id == elemento);
/*
 <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                */
let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="${evento.url}" alt="Persona ${evento.id}" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
            <h3 class="date">${evento.fecha}</h3>
                <h1 class="producto-h1">${evento.persona}</h1>
                <h2 class="type">${evento.tipo}</h2>

                <p class="bold">${evento.descripcion}</p>
              
                
                <p class="place">${evento.lugar}</p>
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Quedan ${evento.available} lugares disponibles</h3>
                <div class="quantity-selector">
                    <label for="quantity" class="quantity-label">Quantity:</label>
                    <select id="quantit.y" class="quantity-dropdown">
                        <option value="1">1 lugar</option>
                        <option value="2">2 lugares</option>
                        <option value="3">3 lugares</option>
                        <option value="4">4 lugares</option>
                        <option value="5">5 lugares</option>
                    </select>
                </div>
                <h4 class="price">${evento.precio}</h4>
            <button class="btn primary-btn">Comprar ahora!</button>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;
}
cards();
// document.querySelector("h1").innerHTML= `el auto ${objeto.titulo}, ${objeto.detalle}, el precio es USD ${objeto.precio}, nos quedan ${objeto.stock}`;