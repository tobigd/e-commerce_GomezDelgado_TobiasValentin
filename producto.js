










// Que los botones ver más de la Home redirijan a producto.html.
// Crear una clase producto con propiedades: titulo, detalle, precio, stock, imagen.
// Crear un objeto como instancia de clase.
// Asignar a una variable etiquetas HTML que incluyan las propiedades del objeto.
// Insertar el contenido de la variable en el main de producto.html con innerHTML.



class Producto {
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
`

let main = document.querySelector("main");
main.innerHTML = etiquetas;

// document.querySelector("h1").innerHTML= `el auto ${objeto.titulo}, ${objeto.detalle}, el precio es USD ${objeto.precio}, nos quedan ${objeto.stock}`;