const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerText = banner.querySelector("p");
const bannerSlide = document.getElementById("banner-img");

let currentSlide = 0; // Track le slide en cours de visionnage

updateActiveDot() // Premier point du carroussel actif au chargement de la page


// Écouteurs d'événements boutons au clic

leftArrow.addEventListener('click', showPreviousSlide);
rightArrow.addEventListener('click', showNextSlide);


/* Fonctions */

// fonction met à jour la position du point du caroussel en fonction des slides

function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		}
	});
}

// fonction du caroussel met à jour l'image en fond + textes en fonction du clic sur les flèches

function showNextSlide() {
	currentSlide = (currentSlide + 1) % slides.length; 
	console.log ("./assets/images/slideshow/" + slides[currentSlide].image);
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();
	// vérification fonctionnement écouteur événement flèche
	console.log ("tu as cliqué sur la flèche suivant");

}
function showPreviousSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();
	// vérification fonctionnement écouteur événement flèche
	console.log ("tu as cliqué sur la flèche précédent");
}

