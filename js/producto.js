










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
  url: "#",
  id: 1,
  character: "Gentamicin Sulfate",
  category: "movie",
  descripcion: "cac",
  price: "$9.80",
  stock: 20,
  age: "kids"
}, {
  id: 2,
  url: "#",
  character: "Reglan",
  category: "animals",
  descripcion: "cac",
  price: "$5.30",
  stock: 7,
  age: "teenagers"
}, {
  id: 3,
  url: "#",
  character: "Caduet",
  category: "animals",
  descripcion: "cac",
  price: "$14.30",
  stock: 22,
  age: "adults"
}, {
  id: 4,
  url: "#",
  character: "Carvedilol",
  category: "random",
  descripcion: "cac",
  price: "$4.33",
  stock: 11,
  age: "kids"
}, {
  id: 5,
  url: "#",
  character: "Ursodiol",
  category: "movie",
  descripcion: "cac",
  price: "$29.56",
  stock: 2,
  age: "adults"
}, {
  id: 6,
  url: "#",
  character: "First Aid for Mind and Body",
  category: "animals",
  descripcion: "cac",
  price: "$11.60",
  stock: 13,
  age: "adults"
}, {
  id: 7,
  url: "#",
  character: "BETTER THAN NATURE ESSENCE",
  category: "movie",
  descripcion: "cac",
  price: "$23.05",
  stock: 29,
  age: "adults"
}, {
  id: 8,
  url: "#",
  character: "Cold Sores",
  category: "random",
  descripcion: "cac",
  price: "$12.34",
  stock: 25,
  age: "adults"
}, {
  id: 9,
  url: "#",
  character: "Estradiol",
  category: "superhero",
  descripcion: "cac",
  price: "$26.88",
  stock: 12,
  age: "teenagers"
}, {
  id: 10,
  url: "#",
  character: "Menthol and Methyl Salicylate",
  category: "random",
  descripcion: "cac",
  price: "$12.58",
  stock: 12,
  age: "teenagers"
}, {
  id: 11,
  url: "#",
  character: "Amoeba Tox",
  category: "movie",
  descripcion: "cac",
  price: "$6.93",
  stock: 29,
  age: "kids"
}, {
  id: 12,
  url: "#",
  character: "Ibuprofen",
  category: "animals",
  descripcion: "cac",
  price: "$8.85",
  stock: 27,
  age: "adults"
}
];

function cards() {
let main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const cos = data.find((data) => data.id == elemento);
/*
 <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                */
let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="${cos.url}" alt="Persona ${cos.id}" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
            <h3 class="type">${cos.age}</h3>
                <h1 class="producto-h1">${cos.character}</h1>
            <h3 class="age">${cos.category}</h3>
                <p class="bold">${cos.descripcion}</p>
              
                
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Quedan ${cos.stock} disfraces disponibles</h3>
                <div class="quantity-selector">
                    <label for="quantity" class="quantity-label">Size:</label>
                    <select id="quantit.y" class="quantity-dropdown">
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">XL</option>
                        <option value="5">custom</option>
                    </select>
                </div>
                <h4 class=price>${cos.price}</h4>
            <button class="btn primary-btn">Comprar ahora!</button>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;
}
cards();
// document.querySelector("h1").innerHTML= `el auto ${objeto.titulo}, ${objeto.detalle}, el precio es USD ${objeto.precio}, nos quedan ${objeto.stock}`;