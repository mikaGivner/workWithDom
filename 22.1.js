// Create a webpage that has a form (asks the user for its name, age, and email address) and when the user clicks submit, open a text window that writes all the information and asks for his confirmation. If he clicks on the confirm button, tell him   “congratulations you successfully sent this form” if he clicks on change information, give him the possibility to change the information, and ask again for his confirmation.

let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let firstName = document.querySelector("#firstName");
let age = document.querySelector("#age");
let email = document.querySelector("#email");
let modal = document.querySelector(".modal");
let details = document.querySelector("h6");
modal.style.visibility = "hidden";

btn.addEventListener("click", function () {
  modal.style.visibility = "visible";

  details.innerHTML = `your name: ${firstName.value} </br> your age: ${age.value} </br> your email: ${email.value}`;
});
btn1.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  firstName.value = "";
  age.value = "";
  email.value = "";
});
btn2.addEventListener("click", function () {
  alert("“congratulations you successfully sent this form");
});
