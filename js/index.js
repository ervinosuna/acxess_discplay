const d = document;
const bigLogo = d.getElementById("bigLogo");
const smallLogo = d.getElementById("smallLogo");

const loadLogo = (entry, observation) => {
  if (!entry[0].isIntersecting) {
    smallLogo.classList.remove("invisible-logo");
    smallLogo.classList.add("visible-logo");
    /*     bigLogo.classList.add("invisible-logo");
    bigLogo.classList.remove("visible-logo"); */
  } else {
    smallLogo.classList.add("invisible-logo");
    smallLogo.classList.remove("visible-logo");
    /*     bigLogo.classList.remove("invisible-logo");
    bigLogo.classList.add("visible-logo"); */
  }
};

const observator = new IntersectionObserver(loadLogo, {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
});

observator.observe(bigLogo);
