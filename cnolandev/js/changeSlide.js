let slideArray = [
  {
    sub: "Limits",
    font: "arial",
    fontStyle: "normal",
    image: "/andrea-leopardi-GV8eF1jJpSs-unsplash.webp",
  },
  {
    sub: "Exceptions",
    font: "Times New Roman",
    fontStyle: "normal",
    image: "/polina-kuzovkova-IuuqE8mGQiw-unsplash.webp",
  },
  {
    sub: "Compromises",
    font: "Georgia",
    fontStyle: "italic",
    image: "/alexandros-giannakakis-LXe_5LmxYCw-unsplash.webp",
  },
  {
    sub: "Excuses",
    font: "Courier New",
    fontStyle: "italic",
    image: "/samsung-memory-z1YJCZ-yV2Q-unsplash.webp",
  },
  {
    sub: "Doubts",
    font: "Garamond",
    fontStyle: "normal",
    image: "/tiago-ferreira-yjx7snQqyDs-unsplash.webp",
  },
];

const heroSub = document.getElementById("hero_sub");
const heroSlide = document.getElementById("hero_slide");

// preload all slide images
slideArray = slideArray.map((slide) => {
  const newImg = new Image();
  newImg.src = slide.image;
  return { ...slide, image: newImg };
});

// console.log(JSON.stringify(slideArray));

let index = 0;

function changeSlide() {
  heroSub.innerHTML = slideArray[index].sub;
  heroSub.style.fontFamily = slideArray[index].font;
  heroSub.style.fontStyle = slideArray[index].fontStyle;

  // console.log(slideArray[index].image.src);
  heroSlide.style.backgroundImage = `url(${slideArray[index].image.src})`;

  index = index < slideArray.length - 1 ? index + 1 : 0;
}

changeSlide();
setInterval(changeSlide, 1000);
