import { movies } from "./data.js";
import{ crearDetalles, } from "../pages.js/function.js";

const search = location.search;
const params = new URLSearchParams(search);
const id = params.get("id");
const peli = movies.find(movie => movie.id == id);
const containerDetalles = document.getElementById("containerDetalles");
containerDetalles.innerHTML = peli

crearDetalles(peli)