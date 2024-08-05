let slideArray = [
  {
    sub: "Limits",
    font: "arial",
    fontStyle: "normal",
  },
  {
    sub: "Exceptions",
    font: "Times New Roman",
    fontStyle: "normal",
  },
  {
    sub: "Compromises",
    font: "Georgia",
    fontStyle: "italic",
  },
  {
    sub: "Excuses",
    font: "Courier New",
    fontStyle: "italic",
  },
  {
    sub: "Doubts",
    font: "Garamond",
    fontStyle: "normal",
  },
];

const heroSub = document.getElementById("hero_sub");
const heroSlides = document.querySelectorAll(".hero__title--main--slide");
console.log(JSON.stringify(heroSlides));

let index = 0;

// console.log(imgArray);

export default function changeSlide(imgObjs) {
  heroSub.innerHTML = slideArray[index].sub;
  heroSub.style.fontFamily = slideArray[index].font;
  heroSub.style.fontStyle = slideArray[index].fontStyle;

  heroSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("show");
    } else {
      slide.classList.remove("show");
    }
  });

  index = index < slideArray.length - 1 ? index + 1 : 0;
}
