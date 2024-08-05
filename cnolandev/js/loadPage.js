export let imgArray = [
  { name: "slide_1", src: "/andrea-leopardi-GV8eF1jJpSs-unsplash.webp" },
  { name: "slide_2", src: "/polina-kuzovkova-IuuqE8mGQiw-unsplash.webp" },
  { name: "slide_3", src: "/alexandros-giannakakis-LXe_5LmxYCw-unsplash.webp" },
  { name: "slide_4", src: "/samsung-memory-z1YJCZ-yV2Q-unsplash.webp" },
  { name: "slide_5", src: "/tiago-ferreira-yjx7snQqyDs-unsplash.webp" },
  { name: "AML_img_1", src: "/Screenshot_AML_account_screen.webp" },
  { name: "AML_img_2", src: "/Screenshot_AML_home.webp" },
  { name: "AML_img_3", src: "/Screenshot_AML_login_screen.webp" },
  { name: "imas_img_1", src: "/Screenshot_imas_cli_edited.webp" },
  { name: "imas_img_2", src: "/Screenshot_imas_gui_edited.webp" },
  { name: "instore_img_1", src: "/Screenshot_in-store_mode_1.webp" },
  { name: "instore_img_2", src: "/Screenshot_in-store_mode_2.webp" },
  { name: "dashcart_img", src: "/dash_cart.webp" },
  { name: "hero_svg", src: "hero_7.svg" },
  { name: "github_svg", src: "logo-github.svg" },
  { name: "linkedin_svg", src: "logo-linkedin.svg" },
  { name: "chevron_down_svg", src: "chevron-down-outline.svg" },
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

      img.src = arrayElement.src;
      img.onload = () => resolve(img);

      img.onerror = () => reject(arrayElement.src);
    }),
  }));
}

export default async function handlePreload() {
  preloadImages(imgArray).forEach((img) =>
    img.p.then(() => (progress += 100 / imgArray.length))
  );
}
