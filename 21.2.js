// Create a webpage that has some text and two buttons with ‘+’ and ‘-‘. Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.
let i=document.createElement('p');
i.innerText="47";
let x=47;

let p=document.createElement('p');
p.innerText=`MY SIZE IS ${x} PX NOW`;
p.style.fontSize="47PX";

let btn1=document.createElement('input');
btn1.setAttribute("type", "button");
btn1.setAttribute("value", "+");
btn1.style.marginRight="1rem";

let btn2=document.createElement('input');
btn2.setAttribute("type", "button");
btn2.setAttribute("value", "-");

btn1.addEventListener("click" ,function(){
    if(x<100){
    x++;
    i.innerText=`${x}`;
    console.log(i);
p.style.fontSize=`${x}px`;
p.innerText=`MY SIZE IS ${x} PX NOW`;
    }
});


btn2.addEventListener("click" ,function(){
    if(x>6){
    x--;
    i.innerText=`${x}`;
    console.log(i);
p.style.fontSize=`${x}px`;
p.innerText=`MY SIZE IS ${x} PX NOW`;
    }
});


let body=document.querySelector('body');
body.append(btn1,btn2,p,i);