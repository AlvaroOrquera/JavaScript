//Ejercicio 1
const h1titulo = document.getElementById("titulo");
let tituloPrincipal = "Frutas";

//Ejercicio 2

h1titulo.innerHTML = tituloPrincipal;

//Ejercicio 3

let colorHeaderFooter = document.querySelectorAll(".colorNaranja");

for (propiedades of colorHeaderFooter) {
    propiedades.classList.add("bg-orange-500");
}

//Ejercicio 4

let parrafoFooter = document.querySelector("p");
parrafoFooter.innerHTML += " Alvaro Orquera - Cohort 52";

//Ejercicios 5

const contenedor = document.getElementById("contenedor");

//Ejercicios 6

function cardData(frutas) {
    return `<article class=" flex flex-col items-center border solid  border-black  justify-items-center  h-[15rem] w-[15rem] border-solid-5 p-5 rounded-lg " >
    <img class=" h-[5rem] w-[5rem] "  src="${frutas.foto}" alt="${frutas.nombre}" >
    <h2>${frutas.nombre} </h2>
    <p>${frutas.descripcion}</p>
    </article>`;
}

//Ejercicio 7

function imprimirCard(frutas, contenedor) {
    let auxdiv = " ";
    for (const fruta of frutas) {
        const article = cardData(fruta);
        auxdiv += article;
    }
    contenedor.innerHTML += auxdiv;
}

//Ejercicio 8
imprimirCard(frutas, contenedor);

//Ejercicio 9

const frutasDulces = document.getElementById("frutasDulces");

frutasDulces.innerHTML += `<h2 class=" font-bold " >Frutas Dulces</h2>`

//Ejercicio 10

function listaFrutas(frutas) {
    const lista = document.createElement("ul")

    for (const fruta of frutas) {
        if (fruta.esDulce === true) {
            const li = document.createElement("li");
            li.textContent = fruta.nombre;
            lista.appendChild(li);
        }
    }

    return lista;

}

const listasFrutasDulces = listaFrutas(frutas);

//Ejercicio 11


frutasDulces.appendChild(listasFrutasDulces);


