// Create a webpage that has part of the application
// process for a job. This page should have a text area
// field and a button. Your user must enter at least 100
// characters before clicking the button. If he didn’t, please
// give him the appropriate message. (using alert is
// forbidden)

let p=document.createElement('p');
p.innerText="Why are you interested in this position?";

let t=document.createElement('textarea');
t.setAttribute("rows", "5");
t.setAttribute("cols", "33");

let btn=document.createElement('input');
btn.setAttribute("type", "button");
btn.setAttribute("value", "Click here!");
btn.style.display="block";

btn.addEventListener("click", ()=>{
    if(t.value.length<100) alert("you must write at least 100 characters ");
    else if(t.value.length>=100) alert("you did it!");
})
let body=document.querySelector('body');
body.append(p, t, btn);