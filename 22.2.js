// Create a webpage that has a checkbox. If the checkbox is checked, make a photo appear. If it is not, make it disappear

let it = document.querySelector("input");
let icon = document.querySelector("i");
it.style.width = "5rem";
it.style.height = "5rem";
icon.style.display = "none";

it.addEventListener("click", function () {
  if (it.checked) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
});
