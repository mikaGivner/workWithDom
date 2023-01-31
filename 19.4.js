let firstName=document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("id", "firstName");
firstName.setAttribute("placeholder","firstName");
firstName.setAttribute("autofocus","");

let lastName=document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("id", "lastName");
lastName.setAttribute("placeholder", "lastName");

let n=document.createElement("p");
n.innerHTML="hello (whats your name?)";
const body=document.querySelector("body");


let sub=document.querySelector("#sub");


sub.addEventListener("click",()=>{
    if(firstName.value==="" && lastName.value==="") alert('please enter full name');
    else if(firstName.value==="") alert('please enter first name');
    else if(lastName.value==="") alert('please enter last name');
    if(firstName.value!=="" && lastName.value!=="") n.innerHTML=`hello ${firstName.value} ${lastName.value}`;
})

firstName.style.display="block";
firstName.style.margin="1rem 0";
firstName.style.width="5rem";
lastName.style.width="5rem";
sub.style.width="3rem";
body.style.display="flex";
body.style.flexDirection="column";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.width="100vw";
body.style.height="100vh";
body.style.background="#efef";
firstName.focus();
body.prepend(n,firstName,lastName);
