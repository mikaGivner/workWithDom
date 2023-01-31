// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned
// on, clicking it again will turn it off.

let i=document.createElement('i');
i.setAttribute("class", "fa-solid fa-lightbulb");
i.style.fontSize="5rem";
i.style.color="#e4e4e4";

let body=document.querySelector('body');
body.style.display="flex";
body.style.flexDirection="column";
body.style.width="100vw";
body.style.height="100vh";
body.style.justifyContent="center";

let p=document.createElement('p');
p.innerHTML="click on the lightbulb to turn <b>on</b>";
let onOff=document.createElement('span');
let ternOn=false;

i.addEventListener("click", ()=>{
    if(!ternOn){
        i.style.color="yellow";
        ternOn=true;
        p.innerHTML="click on the lightbulb to turn <b>off</b>";
        
        
    } 
    else{
        i.style.color="#e4e4e4";
        ternOn=false;
        p.innerHTML="click on the lightbulb to turn <b>on</b>";
       
        
    }
})

body.style.alignItems="center";
body.append(i, p);

