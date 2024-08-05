import "./scss/main.scss";

import changeSlide from "./js/changeSlide";
import handlePreload, { imgArray } from "./js/loadPage";
import "./js/openInfoSection";

handlePreload();

changeSlide();
setInterval(changeSlide, 1000);
