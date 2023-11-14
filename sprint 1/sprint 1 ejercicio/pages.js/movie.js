import{crearTemplate, crearTarjeta, CreateSelector,printTemplate, FilterTitle, filterGenres} from "../pages.js/function.js"
import{ movies } from "./data.js"
const Alvapeli= document.getElementById(`Alvapeli`)

Alvapeli.innerHTML += crearTemplate(movies)

const inputSearch = document.getElementById('inputSearch');
const inpuntList = document.getElementById('inputList');

const movieGenres = movies.map(movie => (movie.genres)).flat();
const ListGenres = ['All', ...new Set(movieGenres)];

console.log(ListGenres);

printTemplate(ListGenres, inpuntList, CreateSelector);



let genreFilter = null;
let searchFilter = null;

inpuntList.addEventListener("input", () => {
    const selectedGenre = inpuntList.value;
    if (selectedGenre === "All") {
        genreFilter = null; 
        applyFiltersAndPrint(); 
    } else {
        genreFilter = selectedGenre !== "" ? filterGenres(movies, selectedGenre) : null;
        applyFiltersAndPrint();
    }
});


inputSearch.addEventListener("input", () => {
    const searchValue = inputSearch.value;
    searchFilter = searchValue !== "" ? FilterTitle(movies, searchValue) : null;
    applyFiltersAndPrint();
});



function applyFiltersAndPrint() {
    const combinedFilter = combineFilters([genreFilter, searchFilter]);
    if (combinedFilter.length > 0) {
        printTemplate(combinedFilter, Alvapeli, crearTarjeta);
    } else {
        Alvapeli.innerHTML = "<p>No movies found</p>";
    }
}
function combineFilters(filters) {
    return filters.reduce((result, currentFilter) => {
        if (currentFilter === null) {
            return result;
        }
        return result.filter(movie => currentFilter.includes(movie));
    }, movies);
}





