//גרסה חכמה יותר למשחק מירוץ- לא המשתמשים מכניסים אלא המחשב מזיז

let p1 = document.querySelectorAll("#player1-race td");
let p2 = document.querySelectorAll("#player2-race td");
let body = document.querySelector("body");
let time = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
let whoWin = document.querySelector("p");
let pressKey = document.querySelector("h2");
let raceTime = document.querySelector("h4");
raceTime.innerText = 0;
pressKey.style.display = "block";
whoWin.innerText = "who wins?";

function one() {
  for (let j = 0; j < 10; j++) {
    p1[j].classList.remove("active");
    p1[j + 1].classList.add("active");
  }
}
let two = () => {
  for (let l = 0; l < 10; l++) {
    p2[l].classList.remove("active");
    p2[l + 1].classList.add("active");
  }
};
let reset = () => {
  window.location.reload();
};
let win2 = () => {
  whoWin.innerText = "yellow wins";
  setTimeout(() => reset(), 2000);
};
let win1 = () => {
  whoWin.innerText = "red wins";
};
let winBoth = () => {
  whoWin.innerText = "both win";
  setTimeout(() => reset(), 2000);
};

body.addEventListener(
  "keyup",
  function (x) {
    pressKey.style.display = "none";
    let step1 = Math.floor(Math.random() * 6);
    let step2 = Math.floor(Math.random() * 6);
    setTimeout(() => one(), time[step1]);
    setTimeout(() => two(), time[step2]);

    if (time[step1] > time[step2]) {
      setTimeout(() => win2(), time[step1]);
    } else if (time[step1] < time[step2]) {
      setTimeout(() => win1(), time[step2]);
    } else {
      setTimeout(() => winBoth(), time[step2]);
    }
  },
  { once: true }
);

// element.addEventListener(
//   "click",
//   () => {
//     console.log("I run only once! 😇");
//   },
//   { once: true }
//איך לעשות שפעולה תקרה רק פעם אחת
// );
