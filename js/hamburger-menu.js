const d = document;

d.addEventListener("click", (e) => {
  console.log("paso");
  if (e.target.matches(".hambur-btn") || e.target.matches(".hambur-btn *")) {
    console.log("aqui estoy");
    d.querySelector(".modal-menu").classList.toggle("is-active");
    d.querySelector(".hambur-btn").classList.toggle("is-active");
  }
});
