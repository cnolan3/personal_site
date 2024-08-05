export let imgArray = [
  "/andrea-leopardi-GV8eF1jJpSs-unsplash.webp",
  "/polina-kuzovkova-IuuqE8mGQiw-unsplash.webp",
  "/alexandros-giannakakis-LXe_5LmxYCw-unsplash.webp",
  "/samsung-memory-z1YJCZ-yV2Q-unsplash.webp",
  "/tiago-ferreira-yjx7snQqyDs-unsplash.webp",
  "/Screenshot_AML_account_screen.webp",
  "/Screenshot_AML_home.webp",
  "/Screenshot_AML_login_screen.webp",
  "/Screenshot_imas_cli_edited.webp",
  "/Screenshot_imas_gui_edited.webp",
  "/Screenshot_in-store_mode_1.webp",
  "/Screenshot_in-store_mode_2.webp",
  "/dash_cart.webp",
  "hero_7.svg",
  "logo-github.svg",
  "logo-linkedin.svg",
  "chevron-down-outline.svg",
];

// page loading indicator
onload = (e) => {
  const loading = document.getElementById("loading");
  const body = document.getElementById("body");
  setTimeout(() => {
    loading.classList.add("fade");
    body.classList.remove("loading");

    setTimeout(() => {
      loading.classList.add("off");
    }, 300);
  }, 1000);
};

let progress = 0;

// modified from https://stackoverflow.com/questions/63397438/pre-load-images-and-get-progress
function preloadImages(images) {
  return images.map((arrayElement) => ({
    ...arrayElement,
    p: new Promise((resolve, reject) => {
      const img = new Image();

      img.src = arrayElement;
      img.onload = () => resolve(img);

      img.onerror = () => reject(arrayElement);
    }),
  }));
}

export default async function handlePreload() {
  preloadImages(imgArray).forEach((img) =>
    img.p.then(() => (progress += 100 / imgArray.length))
  );
}
