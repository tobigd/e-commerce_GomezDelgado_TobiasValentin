




const data = [
    {
    id: 1,
    url: "../photos/1.jpg",
    character: "Buzz Lightyear",
    category: "movie",
    descripcion: "El intrépido guardián espacial de Toy Story, perfecto para los pequeños aventureros.",
    price: "$9.80",
    stock: 20,
    age: "kids"
  }, {
    id: 2,
    url: "../photos/2.jpg",
    character: "Snoopy",
    category: "animals",
    descripcion: "El encantador perro beagle de Charlie Brown, ideal para niños que aman las aventuras caninas.",
    price: "$5.30",
    stock: 7,
    age: "teenagers"
  }, {
    id: 3,
    url: "../photos/3.jpg",
    character: "Simba",
    category: "animals",
    descripcion: "El valiente león de El Rey León, perfecto para adultos con corazón aventurero.",
    price: "$14.30",
    stock: 22,
    age: "adults"
  }, {
    id: 4,
    url: "../photos/4.jpg",
    character: "Minnie Mouse",
    category: "animals",
    descripcion: "El adorable ícono de Disney con orejas redondas, ideal para los más pequeños que aman la diversión y la moda.",
    price: "$4.33",
    stock: 11,
    age: "kids"
  }, {
    id: 5,
    url: "../photos/5.jpg",
    character: "Darth Vader",
    category: "movie",
    descripcion: "El villano más icónico de Star Wars, para los adultos que buscan un disfraz impactante.",
    price: "$29.56",
    stock: 2,
    age: "adults"
  }, {
    id: 6,
    url: "../photos/6.jpg",
    character: "Zootopia Nick Wilde",
    category: "animals",
    descripcion: "El zorro astuto de Zootopia, ideal para adultos que adoran la comedia animal.",
    price: "$11.60",
    stock: 13,
    age: "adults"
  }, {
    id: 7,
    url: "../photos/7.jpg",
    character: "Iron Man",
    category: "superhero",
    descripcion: "El superhéroe millonario de Marvel, con su traje de alta tecnología, listo para salvar el día.",
    price: "$23.05",
    stock: 29,
    age: "adults"
  }, {
    id: 8,
    url: "../photos/8.jpg",
    character: "Hombre Sándwich de Milanga",
    category: "random",
    descripcion: "Para los adultos con hambre de diversión, este disfraz de sándwich de milanesa es único en su clase.",
    price: "$12.34",
    stock: 25,
    age: "adults"
  }, {
    id: 9,
    url: "../photos/9.jpg",
    character: "Spider-Man",
    category: "superhero",
    descripcion: "El superhéroe arácnido favorito, ideal para adolescentes que quieren balancearse entre edificios.",
    price: "$26.88",
    stock: 12,
    age: "teenagers"
  }, {
    id: 10,
    url: "../photos/10.jpg",
    character: "Hombre Mate",
    category: "random",
    descripcion: "Un disfraz que celebra el mate, perfecto para adultos que quieren lucir su lado más tradicional y divertido.",
    price: "$12.58",
    stock: 12,
    age: "adults"
  }, {
    id: 11,
    url: "../photos/11.jpg",
    character: "Elsa",
    category: "movie",
    descripcion: "La reina de Arendelle de Frozen, perfecta para los niños que quieren dejarlo ir.",
    price: "$6.93",
    stock: 29,
    age: "kids"
  }];





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


const elemento = window.location.search.split("=")[1];
const cos = data.find((data) => data.id == elemento);
function cards() {
let main = document.querySelector("main");





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
                <div class="quanti-selector">
                    <label for="quanti" class="quanti-label">Size:</label>
                    <select id="quanti" class="quanti-dropdown">
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">XL</option>
                        <option value="5">custom</option>
                    </select>
                </div>
                <h4 class=price>${cos.price}</h4>
            ${localStorage.getItem("email") ? `<button id="decrease" class="btn btn-danger px-3" onclick="decreaseItem()">-</button>
              <input id="counter" type="text" class="form-control text-center mx-2" style="width: 80px;" value="1" readonly>
              <button id="increase" class="btn btn-danger px-3" onclick="increaseItem()">+</button>
              <button id="confirm" class="btn btn-primary mt-3" onclick="addItem(${cos})">Comprar</button>` :`<a class="btn btn-primary btn-lg" href="./login.html">Inicie sesion para comprar</a>`}
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;
}
cards();
// document.querySelector("h1").innerHTML= `el auto ${objeto.titulo}, ${objeto.detalle}, el precio es USD ${objeto.precio}, nos quedan ${objeto.stock}`;
const counter = document.querySelector("#counter");
function decreaseItem () {
  if (Number(counter.value)<=1){
    alert(`No puedes comprar menos de 1 disfraces`);
  }
  else{
    counter.value = Number(counter.value)-1;
  }
}

function increaseItem () {
  if (Number(counter.value)>=cos.stock){
    alert(`No puedes comprar mas disfraces que el stock disponible`);
  }
  else{
    counter.value = Number(counter.value)+1;
  }
}


function addItem() {
  // Recuperamos el carrito del localStorage o inicializamos como vacío
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const idProduct = Number(window.location.search.split("=")[1]); // ID del producto actual

  // Obtenemos el producto correspondiente al ID
  const product = data.find(item => item.id === idProduct);

  // Si no encontramos el producto, mostramos un error
  if (!product) {
      alert("Producto no encontrado.");
      return;
  }

  // Obtenemos el valor numérico del contador, asegurando un mínimo de 1
  const quantityToAdd = Math.max(1, parseInt(counter.value, 10)); 

  // Verificamos si el producto ya existe en el carrito
  const existingProduct = cart.some(item => item.product.id === idProduct);

  if (existingProduct) {
      // Si ya existe, actualizamos la cantidad
      cart = cart.map(item => {
          if (item.product.id === idProduct) {
              return { ...item, quantity: item.quantity + quantityToAdd };
          }
          return item; // Los demás productos se mantienen iguales
      });
  } else {
      // Si no existe, lo agregamos al carrito
      cart.push({ product: product, quantity: quantityToAdd });
  }

  // Guardamos el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Calculamos la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Actualizamos la cantidad total en el navbar
  localStorage.setItem("quantity", totalQuantity); // Guardamos en localStorage
  const quantityTag = document.querySelector("#quantity");
  quantityTag.textContent = totalQuantity; // Mostramos el total en el HTML

  // Refrescamos la página para reflejar cambios
  location.reload();

  // Notificamos al usuario y reseteamos el contador
  alert("Producto agregado al carrito.");
  counter.value = 1; // Restablecemos el contador al valor inicial
}
