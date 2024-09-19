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

const prod = "Productos";
document.querySelector("h1").innerText = "Productos";
const section = document.querySelector("section");

let array = [];
function card() {
    for (let i = 1; i <= 9; i++) {
        array.push(`
            <div class="col-md-4">
                <div class="card">
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">CARTA ${i}</h5>
                        <p class="card-text">Descripcion del producto</p>
                        <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                </div>
            </div>`);
    }
    // Usamos join('') para concatenar los elementos sin comas
    section.innerHTML = array.join('');
}

card();






