const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables

let currentSlide = 0;
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Écouteurs d'événements pour les boutons gauche et droite

leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);
function moveLeft(){
	alert("Tu as cliqué sur la flèche gauche");
}
function moveRight(){
	alert("tu as cliqué sur la flèche droite");
}