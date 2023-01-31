// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
// make the text “you’re too young” appear

let age=document.createElement('input');
age.setAttribute("type", "number");
age.setAttribute("placeholder", "please enter your name");
// age.setAttribute("max","99");
let btn=document.createElement('input');
btn.setAttribute("type", "submit");
let body=document.querySelector('body');
let text=document.createElement('h3');

btn.addEventListener("click",()=>
{
    if(age.value>18 && age.value<120){ text.innerText="you can drink";
    text.style.color="#000";
}
else if(age.value>0 && age.value<=18){ text.innerText="you’re too young";
text.style.color="#000";
}
    else {
        text.innerText="the age is not available";
        text.style.color="red";
    }
    
});
body.append(age, btn, text);