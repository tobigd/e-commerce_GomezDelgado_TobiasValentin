let botones = [
    {texto: "Producto", href:"/pages/producto.html"},
    {texto: "Inicio", href:"/pages/index.html"},
    {texto: "Contacto", href:"#"}
]
const header = document.querySelector("header");

let menu = [];

for (let boton of botones) {
    menu.push(`<a class="nav-item" href="${boton.href}">${boton.texto}</a>`)
    
}


let navCode = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="">Ecommerce</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    ${menu.join().replaceAll(",", "")}
  </div>
</div>
</nav>`

header.innerHTML = navCode;

