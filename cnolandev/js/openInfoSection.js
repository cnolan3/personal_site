// modified from https://css-tricks.com/using-css-transitions-auto-dimensions/
function collapseSection(element, collapsedHeight) {
  // element.style.height = null;
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = "";

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = collapsedHeight + "px";
    });
  });

  // mark the section as "currently collapsed"
  element.setAttribute("data-collapsed", "true");
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + "px";

  // when the next css transition finishes (which should be the one we just triggered)
  // element.addEventListener("transitionend", function (e) {
  //   // remove this event listener so it only gets triggered once
  //   element.removeEventListener("transitionend", this);

  //   // remove "height" from the element's inline styles, so it can return to its initial value
  //   element.style.height = null;
  // });

  // mark the section as "currently not collapsed"
  element.setAttribute("data-collapsed", "false");
}

const sections = document.querySelectorAll(".info-section");

sections.forEach((section) => {
  section
    .querySelector(".info-section__title")
    .addEventListener("click", function (e) {
      e.preventDefault();

      sections.forEach((s) => {
        const title = s.querySelector(".info-section__title");
        console.log(title.clientHeight);

        if (title.id === this.id) {
          if (s.getAttribute("data-collapsed") === "true") {
            s.classList.add("open");
            expandSection(s);
          } else {
            s.classList.remove("open");
            collapseSection(s, title.clientHeight);
          }
        } else {
          if (s.getAttribute("data-collapsed") === "false") {
            s.classList.remove("open");
            collapseSection(s, title.clientHeight);
          }
        }
      });
    });
});
