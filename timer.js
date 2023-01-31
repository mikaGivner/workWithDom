let timer = document.querySelector(".timer");
timer.innerText = "0";
timer.style.color = "red";
let i = 0;
function time() {
  i++;
  timer.innerText = `${i.toString()}`;
}

setInterval(() => time(), 1000);

let body = document.querySelector("body");
body.addEventListener("keydown", function (e) {
  //   if (e.key === "Enter") console.log("hey"); //קולט אנטר

  //if (e.key === " ") console.log("hey");//קולט רווח
  if (e.key === "ArrowRight") console.log("hey"); //קולט רווח

  console.log(e);
});
