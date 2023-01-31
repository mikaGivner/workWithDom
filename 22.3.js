let main = document.querySelector("body");
let wordWarehouse = document.querySelector(".wordWarehouse");
let result = document.querySelector(".result");
let rLetter = document.querySelector(".rLetter");
let modal = document.querySelector(".modal");
let btn = document.querySelector("#btn");
let again = document.querySelector(".again");
again.style.visibility = "hidden";
let arr = [];
modal.style.visibility = "hidden";
wordWarehouse.style.fontSize = "1rem";
//הגרלת מספר רנדומלי והפיכתו לאות
let rnum = Math.floor(Math.random() * 25) + 97;

main.addEventListener("keypress", function (x) {
  again.style.visibility = "hidden";
  let str = String.fromCharCode(rnum);
  if (x.key.charCodeAt() < 97 || x.key.charCodeAt() > 122) {
    again.style.visibility = "visible";
    again.innerText = "this char is not available";
  } else if (arr.includes(x.key)) {
    again.innerText = "you already guessed the letter.";
    again.style.visibility = "visible";
  } else {
    wordWarehouse.innerText += ` ${x.key} `;
    arr.push(x.key);
    console.log(arr);
    if (str === x.key) {
      result.style.color = "green";
      result.innerText = "you did it!";
      rLetter.innerText = `${str}`;
      modal.style.visibility = "visible";
      rnum = Math.floor(Math.random() * 25) + 97;
      main.addEventListener("keydown", function () {
        event.preventDefault(); //גורם למקלדת לא לקבל יותר לחצנים
        return false;
      });
    } else {
      result.style.color = "red";
      result.innerText = "you wrong";
    }
    console.log(x.key);
  }
});
btn.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  wordWarehouse.innerText = "";
  rLetter.innerText = "?";
  result.innerText = "";
  result.style.color = "#red";
  window.location.reload();
});
