const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slidePosition = 0;
const banner = document.querySelector(".banner-img");
const txtBanner = document.querySelector("p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

//ajout d'un évènement sur les flèches
arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

function updateImage() {
  const slide = slides[slidePosition];
  banner.src = "./assets/images/slideshow/" + slide.image;
  txtBanner.innerHTML = slide.tagLine;
}

function moveRight() {
  slidePosition += 1;
  if (slidePosition === slides.length) {
    slidePosition = 0;
  }
  updateImage();
  updateDots();
}

function moveLeft() {
  slidePosition -= 1;
  if (slidePosition === -1) {
    slidePosition = slides.length - 1;
  }
  updateImage();
  updateDots();
}

//ajout des points sur les images (crétion d'une div pour mettre sa classe dot + boucle pour réitérer)
const bulletPoint = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  bulletPoint.appendChild(dot);
}

//bullet points actifs
const selectBullet = document.querySelectorAll(".dot");
updateDots();
function updateDots() {
  for (let i = 0; i < selectBullet.length; i++) {
    selectBullet[i].classList.remove("dot_selected");
  }

  selectBullet[slidePosition].classList.add("dot_selected");
}
