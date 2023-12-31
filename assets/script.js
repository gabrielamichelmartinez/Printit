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
const bannerSlide = document.getElementById("banner");

let currentSlide = 0; // Track le slide en cours de visionnage

updateActiveDot() // Selectionne le premier bullet point au chargement de la page


// Écouteurs d'événements boutons au clic

leftArrow.addEventListener('click', showPreviousSlide);
rightArrow.addEventListener('click', showNextSlide);


/* Fonctions */

function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		}
	});
}
/* "forEach" goes through each bullet point and removes the "dot_selected" class.
"dot_selected" class is added only to the bullet point corresponding to the current slide. */

// fonction du caroussel mise à jour d'image + textes ne fonction du clic sur le flèches

function showNextSlide() {
	currentSlide = (currentSlide + 1) % slides.length; 
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

