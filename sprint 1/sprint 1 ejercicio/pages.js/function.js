export function crearTemplate(listaMovies) {
    let template = ""
    for (const movie of listaMovies) {
        template += crearTarjeta(movie)
    }
    console.log(template)
    return template
}

export function crearTarjeta(movies) {
    return `<article class=" w-[350px] h-fit border flex flex-col gap-5 bg-gradient-to-t from-slate-700 to-slate-900 rounded-xl px-5 pb-5  p-4 items-center border-none ">
    <img class="h-[70%]" src="${movies.image}" alt="">
    <h2 class="text-center">${movies.title}</h2>
    <h3 class="text-center">${movies.tagline}</h3>
    <p class="line-clamp-5">${movies.overview}</p>
    <a href="./detalles.html?id=${movies.id}">More details ></a>
</article>`
}


export function CreateSelector(genresFilter) {
    return `<option value="${genresFilter}">${genresFilter}</option>`
}
export function printTemplate(ListGenres, ContainerListSearch, fn) {
    let template = ""
    for (const genre of ListGenres) {
        template += fn(genre)
    }
    ContainerListSearch.innerHTML = template
}
export function FilterTitle(list, title) {
    const Filter = list.filter(movie => movie.title.toLowerCase().startsWith(title.toLowerCase()))
    return Filter
}
export function filterGenres(listMovies, genreSelect) {
    const filterGenres = listMovies.filter(movie => movie.genres.includes(genreSelect))
    return filterGenres
}

export function crearDetalles(peliculas){
    return `<article
        class="flex flex-col bg-gradient-to-t from-slate-700 to-slate-900 items-center justify-center h-[50rem] w-[84rem]">

        <div class="flex  flex-wrap justify-center gap-10">
            <img class="h-[25rem] w-[40rem] rounded-full" src="${peliculas.image}" alt="${peliculas.title}"></img>
                <div class="flex flex-col flex-wrap justify-center gap-3">
                    <h2 class="font-kanit; text-3xl">${peliculas.title}</h2>
                    <h3 class="font-semibold w-[30rem]">${peliculas.tagline}</h3>
                    <p class="font-medium w-[25rem]">${peliculas.overview}</p>
                </div>
        </div>
        <div class="flex flex-wrap justify-between w-[85%] p-6 gap-5 rounded-lg">
            <table
                class="border-black text-white mt-8 bg-gradient-to-t from-slate-900 to-slate-700 p-10 gap-5 rounded-lg text-center w-[25rem] h-[10rem] border-solid-white">
                <tbody>
                    <tr>
                        <th>Original Lenguage</th>
                        <td>${peliculas.original_language}</td>
                    </tr>
                    <tr>
                        <th>Release Date</th>
                        <td>${peliculas.release_date}</td>
                    </tr>
                    <tr>
                        <th>Runtime</th>
                        <td>${peliculas.runtime}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${peliculas.status}</td>
                    </tr>
                </tbody>
            </table>
            <table class="border-black text-white mt-8 bg-gradient-to-t from-slate-900 to-slate-700 p-10 gap-5 rounded-lg text-center w-[25rem] h-[10rem] border-solid-white">
                <tr>
                    <th>Vote Average</th>
                    <td>${peliculas.vote_average}</td>
                </tr>
                <tr>
                    <th>Budget</th>
                    <td>${peliculas.budget}</td>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <td>${peliculas.revenue}</td>
                </tr>
            </table>
        </div>
    </article>`
}

export function insertarDetalles(peliculas, contenedor) {
    crearDetalles(peliculas)
    contenedor.innerHTML += crearDetalles(peliculas)
}



