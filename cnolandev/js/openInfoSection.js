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

// open the section
function open(section) {
  expandSection(section);
  section.classList.add("open");
}

// close the section
function close(section) {
  collapseSection(
    section,
    section.querySelector(".info-section__title").clientHeight
  );

  // wait until the section is done collapsing to un-animate the title section
  setTimeout(() => {
    section.classList.remove("open");
  }, 400);
}

// get all info sections
const sections = document.querySelectorAll(".info-section");

// add click events to all info section titles
sections.forEach((section) => {
  section
    .querySelector(".info-section__title")
    .addEventListener("click", function (e) {
      e.preventDefault();

      sections.forEach((s) => {
        const title = s.querySelector(".info-section__title");

        if (title.id === this.id) {
          if (s.getAttribute("data-collapsed") === "true") {
            open(s);
          } else {
            close(s);
          }
        } else {
          if (s.getAttribute("data-collapsed") === "false") {
            close(s);
          }
        }
      });
    });
});
