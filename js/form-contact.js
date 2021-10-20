const d = document;

d.addEventListener("DOMContentLoaded", (f) => {
  formValidation();
});

function formValidation() {
  const $form = d.querySelector(".contact-form");
  let now = new Date();
  // Assign date to calendar input: today -> minDate: today -> maxDate: year+3
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let dateTime = year + "-" + month + "-" + day;

  d.getElementById("eventDate").value = dateTime;
  d.getElementById("eventDate").min = dateTime;
  dateTime = year + 3 + "-" + month + "-" + day;
  d.getElementById("eventDate").max = dateTime;

  d.addEventListener("focusout", (e) => {
    if (e.target.matches(".contact-form [name]")) {
      let $input = e.target;
      let pattern;

      switch ($input.name) {
        case "firstName":
        case "lastName":
        case "city":
        case "state":
          pattern = "^([A-Za-zÑñÁáÉéÍíÓóÚúÜü'\\s]{3,25})?$";
          break;
        case "cellularPhone":
        case "phone":
          pattern =
            "^[+]?(\\d{2})?[ -]?(\\d{3,4})[ -]?(\\d{3})[ .-]?(\\d{2})[ .-]?(\\d{2})$";
          console.log("celular y phone");
          break;
        case "email":
          pattern =
            "^[_a-z0-9]+(\\.[a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$";
          break;
        case "message":
          pattern = "^.{1,255}$";
          break;
        case "address":
          pattern = "^.{2,100}$";
          break;
        case "reference":
          pattern = "^.{2,30}$";
          break;
        default:
          pattern = "^.{1,10}$";
      }
      console.log("el pattern es: ", pattern);
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        console.log(`Este es el valor: ${regex.exec($input.value)}`);
        console.log(!regex.exec($input.value));
        if (!regex.exec($input.value)) {
          d.getElementById($input.id).classList.add("is-invalid");
          d.getElementById($input.id).classList.remove("is-valid");
          console.log("añade invalid");
        } else {
          d.getElementById($input.id).classList.remove("is-invalid");
          d.getElementById($input.id).classList.add("is-valid");
          console.log("añade valid");
        }
      } else {
        if (e.target.value === "") {
          console.log("esta en blanco");
          d.getElementById($input.id).classList.remove("is-invalid");
          d.getElementById($input.id).classList.remove("is-valid");
        }
      }
    }
  });
  d.addEventListener("submit", (e) => {
    const $tempo = d.querySelector(".contact-form-status"),
      $resp = d.querySelector(".contact-form-message"),
      $allInputs = d.querySelectorAll(".contact-form [name]");
    /* e.preventDefault(); */

    $tempo.classList.remove("none");
    /* Se utiliza el setTimeout para emular un servidor, antes de hacer reset al formulario*/
    setTimeout(() => {
      $allInputs.forEach((allInput) => {
        allInput.classList.remove("is-invalid");
        allInput.classList.remove("is-valid");
      });
      $tempo.classList.add("none");
      $resp.classList.remove("none");
      $form.reset();
      setTimeout(() => $resp.classList.add("none"), 3000);
    }, 4000);
  });
}
