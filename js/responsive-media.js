const w = window;
const d = document;

let mqResponsive = w.matchMedia("(max-width: 600px)");

/* console.log(mqResponsive.matches); */

const changeScreen = (mql) => {
  console.log(mql);
  if (mql.matches) {
    d.getElementById(
      "video"
    ).innerHTML = `<a href="https://www.youtube.com/embed/oKazGrAVpvc" target="_blank" rel="noopener">Ver video 1</a>`;
    console.log("solo link");
  } else {
    console.log("Video");
    d.getElementById(
      "video"
    ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/oKazGrAVpvc" title="Prueba de sonido e"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>`;
  }
};

mqResponsive.addEventListener("change", changeScreen);
changeScreen(mqResponsive);

// true es menor  false es mayor  https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
function slider() {
  const $Next = d.querySelector(".next"),
    $Prev = d.querySelector(".prev"),
    $slides = d.querySelectorAll(".slides");

  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $Prev) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if (e.target === $Next) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}
slider();
