const contenedor = document.getElementById(`Alvapeli`)
console.log(movies)

Alvapeli.innerHTML += crearTemplate(movies)

function crearTemplate(listaMovies) {
    let template = ""
    for (const movie of listaMovies) {
        template += crearTarjeta(movie)
    }
    console.log(template)
    return template
}

function crearTarjeta(movies) {
    return `<article class=" w-[350px] h-fit border flex flex-col gap-5 bg-gradient-to-t from-slate-700 to-slate-900 rounded-xl px-5 pb-5  p-4 items-center border-none ">
    <img class="h-[70%]" src="${movies.image}" alt="">
    <h2 class="text-center">${movies.title}</h2>
    <h3 class="text-center">${movies.tagline}</h3>
    <p class="line-clamp-5">${movies.overview}</p>
</article>`
}