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
]

const slidesContainer = document.getElementById("banner");
const dotsContainer = document.getElementById("dots");

let i;
for (i=0; i<slides.length; i++) {
    let slide = document.createElement("img");
    slide.id = "slide" + (i+1);
    slide.classList.add("banner-img");    
    slide.src = "./assets/images/slideshow/" + slides[i]["image"];
    slidesContainer.appendChild(slide);
    
    let dot = document.createElement("div");
    dot.id = "dot" + (i+1);
    dot.classList.add("dot");    
    dotsContainer.appendChild(dot);
    
}

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", function() {
    // si je  clique à droite, l'image courante est celle d'avant + 1
    currentSlide = currentSlide + 1;
    
    // Si j'étais à 4 et que je fais + 1, je repasse à l'image 1 (parce qu'il n'y a pas d'image 5)
    if (currentSlide > slides.length) {
        currentSlide = 1;
    } 
    
    // appel de la fonction "display" (plus bas)
    display(currentSlide);
});

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", function() {
    // si je  clique à gauche, l'image courante est celle d'avant - 1
    currentSlide = currentSlide - 1;
    
    // Si j'étais à 1 et que je fais - 1, je repasse à la dernière image (parce qu'il n'y a pas d'image 0)
    if (currentSlide < 1) {
        currentSlide = slides.length;
    } 
    
    // appel de la fonction "display" (plus bas)
    display(currentSlide);
});

var currentSlide = 1;
display(currentSlide);



// définission d'une fonction qui affiche les images  et les points en fonction d'un paramètre
function display(slideIndex) {
    
    document.getElementById("tagline").innerHTML = slides[slideIndex-1].tagLine;
    
    for (i=0; i<slides.length; i++) {
        
        let slide = document.getElementById("slide"+(i+1));
        if (slideIndex == i+1) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        } 
        
        let dot = document.getElementById("dot"+(i+1));
        if (slideIndex == i+1) {
            dot.className = "dot dot_selected";
        } else {
            dot.className = "dot";
        } 
    }
}




