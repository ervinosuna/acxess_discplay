const d = document;

/* d.addEventListener("DOMContentLoaded", (f) => {
  hamburger(".hambur-btn", ".modal-menu");
});

function hamburger(btn, menu) {
  d.addEventListener("click", (e) => {
    console.log("paso", btn + menu);
    if (e.target.matches(btn)) {
      console.log("aqui estoy");
      d.querySelector(menu).classList.toggle("is-active");
    }
  });
} */

/*
 */

d.addEventListener("click", (e) => {
  console.log("paso");

  /*   var baseElement = d.querySelector(".hambur-btn *");
  console.log(baseElement);
  console.log(baseElement.querySelector("span")); */

  if (e.target.matches(".hambur-btn") || e.target.matches(".hambur-btn *")) {
    console.log("aqui estoy");
    d.querySelector(".modal-menu").classList.toggle("is-active");
    d.querySelector(".hambur-btn").classList.toggle("is-active");
  }
});
