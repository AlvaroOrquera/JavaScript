import{movies} from "./data.js";
const movieImages = movies.map(movie => movie.image);
const movieTitles = movies.map(movie => movie.title);


const bannerImages = movieImages;
const bannerTexts = movieTitles;

let currentIndex = 0;

function changeBanner() {
    currentIndex = (currentIndex + 1) % bannerImages.length;
    document.getElementById("bannerImage").src = bannerImages[currentIndex];
    document.getElementById("bannerText").textContent = bannerTexts[currentIndex];
}

setInterval(changeBanner, 5000);
