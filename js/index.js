console.log ("Hola, buenas noches! Les hablo a todos desde wasa bisnes, saludos a levere club de fans (corazon)");

// console.log ("Hola, buenas noches! Les hablo a todos desde wasa bisnes, saludos a levere club de fans (corazon)");

// console.log (1+1==1 )

// section.innerHTML = arr.join().replaceAll(",", "");
/*
function codigo(){
let h1 = document.querySelector("h1");
h1.innerText("Productos")
let array = []

for (let i = 1; i < 10; i++) {
    d = ""
}

section.innerHTML = arr.join().replaceAll(",", "");
}


codigo()

*/
// const card1 = "Computadora Acer V0";
// document.querySelector("h3").innerText= card1;

// const card2 = "Computadora Acer V1";
// document.querySelector("h4").innerText= card2;

// const card3 = "Computadora Acer V2";
// document.querySelector("h5").innerText= card3;ººº1
document.querySelector("h1").innerText = "Productos";
const section = document.querySelector("section");

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
  
function crearCard(productos)
{
    const cus = productos.map((producto) => 
        `<div class="col-md-4">
                <div class="card">
                    <img src="${producto.url}" class="card-img-top">
                    <div class="card-body">
                    <p class="card-text">${producto.age}</p>
                        <h5 class="card-title">${producto.character}</h5>
                        <p class="card-text">${producto.category}</p>
                        <p class="card-text">${producto.descripcion}</p>
                        <a href="/pages/producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>`);

    section.innerHTML = cus.join().replaceAll(",", "");
  }
    crearCard(data)
    // buttons search, remove and button
    const search = document.querySelector("#search");
    const remove = document.querySelector("#remove");
    const button = document.querySelector("#button");
    // buttons category
    const all = document.querySelector("#allButton");
    const animals = document.querySelector("#animalsButton");
    const movie = document.querySelector("#movieButton");
    const superhero = document.querySelector("#superheroButton");
    const random = document.querySelector("#randomButton");
    
    function bus() {
      
      // Verificamos si el valor de búsqueda no está vacío
      if (search.value === "") {
        alert("Por favor, ingresa un nombre para buscar.");
        return;
      }
    
      // Filtramos los datos con el valor del input
      const filtro = data.filter((producto) => 
        producto.character.toLowerCase().includes(search.value.toLowerCase().trim()));
      
      if (filtro.length > 0) {
        crearCard(filtro);
      } else {
        section.innerHTML = "<p>No se encontraron resultados.</p>";
      }
    }
    function restart() {

      crearCard(data);
      search.value="";
    }
    
    function allF() {
      const filAll = data.filter((producto) => 
        producto.category.toLowerCase().trim().includes(all.value.toLowerCase().trim()));
        crearCard(filAll);
        search.value="";
      }
      function aniF() {
        const filAll = data.filter((producto) => 
          producto.category.includes("animals"));
          crearCard(filAll);
          search.value="";
        }
      function supF() {
        const filAll = data.filter((producto) => 
          producto.category.includes("superhero"));
          crearCard(filAll);
          search.value="";
        }

        function movF() {
          const filAll = data.filter((producto) => 
            producto.category.includes("movie"));
            crearCard(filAll);
            search.value="";
          }

          function ranF() {
            const filAll = data.filter((producto) => 
              producto.category.includes("random"));
              crearCard(filAll);
              search.value="";
            }

    button.addEventListener("click", bus);
    remove.addEventListener("click", restart);

    all.addEventListener("click", allF);
    animals.addEventListener("click", aniF);
    movie.addEventListener("click", movF);
    superhero.addEventListener("click", supF);
    random.addEventListener("click", ranF);

    
    // Usamos join('') para concatenar los elementos sin comas