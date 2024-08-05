import { imgArray } from "./loadPage";

let slideArray = [
  {
    sub: "Limits",
    font: "arial",
    fontStyle: "normal",
    imageName: "slide_1",
  },
  {
    sub: "Exceptions",
    font: "Times New Roman",
    fontStyle: "normal",
    imageName: "slide_2",
  },
  {
    sub: "Compromises",
    font: "Georgia",
    fontStyle: "italic",
    imageName: "slide_3",
  },
  {
    sub: "Excuses",
    font: "Courier New",
    fontStyle: "italic",
    imageName: "slide_4",
  },
  {
    sub: "Doubts",
    font: "Garamond",
    fontStyle: "normal",
    imageName: "slide_5",
  },
];

const heroSub = document.getElementById("hero_sub");
const heroSlide = document.getElementById("hero_slide");

let index = 0;

// console.log(imgArray);

export default function changeSlide(imgObjs) {
  heroSub.innerHTML = slideArray[index].sub;
  heroSub.style.fontFamily = slideArray[index].font;
  heroSub.style.fontStyle = slideArray[index].fontStyle;

  const imgSrc = imgArray.find(
    (img) => img.name === slideArray[index].imageName
  ).src;

  heroSlide.style.backgroundImage = `url(${imgSrc})`;

  index = index < slideArray.length - 1 ? index + 1 : 0;
}
