(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//drop down values working
let dropdownitems = document.querySelectorAll(".dropdown-item");
let categoryInput = document.querySelector(".dropdown-toggle");
console.log(categoryInput);
for (let item of dropdownitems) {
  item.addEventListener("click", () => {
    categoryInput.value = item.innerText;
  });
}
//taxes toggle switch
let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("click", () => {
  const displaytax = document.querySelectorAll("#tax-info");
  for (let item of displaytax) {
    item.classList.toggle("d-none");
  }
});


