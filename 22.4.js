let p1 = document.querySelectorAll("#player1-race td");
let p2 = document.querySelectorAll("#player2-race td");
let whoWin = document.querySelector("h2");
whoWin.style.display = "none";
let body = document.querySelector("body");
let j = 0;
let i = 0;

//טיימר
let timer = document.querySelector(".timer");
timer.innerText = "0";
timer.style.color = "red";
let t = 0;
function time() {
  t++;
  timer.innerText = `${t.toString()}`;
}

setInterval(() => time(), 1000);

let reset = () => {
  window.location.reload();
};

body.addEventListener("keyup", function (x) {
  console.log(x.key);
  if (j === 11) {
    whoWin.style.display = "block";
    whoWin.innerText = "the red win";
    body.addEventListener("keyup", function () {
      event.preventDefault(); //גורם למקלדת לא לקבל יותר לחצנים
      return false;
    });
    setTimeout(() => reset(), 3000);
  } else if (x.key === "ArrowRight") {
    p1[j].classList.remove("active");

    p1[j + 1].classList.add("active");
    j++;
    console.log(j);
  }
});

body.addEventListener("keyup", function (y) {
  if (i === 11) {
    whoWin.style.display = "block";
    whoWin.innerText = "the yellow win";
    body.addEventListener("keyup", function () {
      event.preventDefault(); //גורם למקלדת לא לקבל יותר לחצנים
      return false;
    });
    setTimeout(() => reset(), 3000);
  } else if (y.key === "ArrowLeft") {
    p2[i].classList.remove("active");
    p2[i + 1].classList.add("active");
    i++;
  }
});
