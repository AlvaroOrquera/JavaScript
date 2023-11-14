import { movies } from "./data.js";
import{ crearDetalles,insertarDetalles } from "../pages.js/function.js";

const search = location.search;
const params = new URLSearchParams(search);
const id = params.get("id");
const peli = movies.find(movie => movie.id == id);
const containerDetalles = document.getElementById("containerDetalles");


insertarDetalles(peli, containerDetalles);
