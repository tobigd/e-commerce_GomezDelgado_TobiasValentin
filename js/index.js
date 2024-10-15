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
    id: 1,
    persona: "Manolo Bootherstone",
    tipo: "Cost Accountant",
    descripcion: "Muy buen tipo",
    lugar: "China",
    fecha: "2/25/2026",
    precio: "$3896.63"
  }, {
    id: 2,
    persona: "Belia Poulsen",
    tipo: "Web Developer II",
    descripcion: "Medio malo",
    lugar: "China",
    fecha: "5/15/2026",
    precio: "$1382.63"
  }, {
    id: 3,
    persona: "Cecelia Vuittet",
    tipo: "Community Outreach Specialist",
    descripcion: "Ahora a disfrutar",
    lugar: "China",
    fecha: "11/12/2026",
    precio: "$4913.81"
  }, {
    id: 4,
    persona: "Amanda Wyldes",
    tipo: "Senior Quality Engineer",
    descripcion: "Una noche de maquillaje",
    lugar: "Sweden",
    fecha: "9/14/2025",
    precio: "$4865.34"
  }, {
    id: 5,
    persona: "Fabian Goodbarr",
    tipo: "Staff Accountant II",
    descripcion: "No hay lugar para silencios",
    lugar: "Russia",
    fecha: "1/22/2025",
    precio: "$4033.58"
  }, {
    id: 6,
    persona: "Miran Skirling",
    tipo: "Occupational Therapist",
    descripcion: "El cantante del momento",
    lugar: "China",
    fecha: "5/2/2026",
    precio: "$3166.95"
  }, {
    id: 7,
    persona: "Sylas Becket",
    tipo: "Programmer Analyst II",
    descripcion: "Deja lejos a tus mascotas",
    lugar: "Russia",
    fecha: "8/22/2026",
    precio: "$3220.01"
  }, {
    id: 8,
    persona: "Derwin Graben",
    tipo: "Senior Financial Analyst",
    descripcion: "A cocinar algo rico",
    lugar: "Thailand",
    fecha: "4/21/2026",
    precio: "$4083.75"
  }, {
    id: 9,
    persona: "Shelley Grenshiels",
    tipo: "Nurse",
    descripcion: "Unas siestitas juntos",
    lugar: "Peru",
    fecha: "6/8/2025",
    precio: "$2858.92"
  }, {
    id: 10,
    persona: "Elsa Ettritch",
    tipo: "Engineer I",
    descripcion: "Ciencia? es por aqui",
    lugar: "Japan",
    fecha: "7/29/2025",
    precio: "$682.81"
  }];
  

    const citas = data.map((cita) => 
        `<div class="col-md-4">
                <div class="card">
                    <img src="${cita.url}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${cita.persona}</h5>
                        <p class="card-text">${cita.tipo}</p>
                        <p class="card-text">${cita.descripcion}</p>
                        <a href="/pages/producto.html?prod=${cita.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>`);

    section.innerHTML = citas.join().replaceAll(",", "");
    // Usamos join('') para concatenar los elementos sin comas
    