let form=document.createElement('form');


let p=document.createElement('p');
p.innerText="How many smileys do you want to see?";

let t=document.createElement('input');
t.setAttribute("type", "text");
t.setAttribute("value", "");
t.setAttribute("autofocus", "");



let btn=document.createElement('input');
btn.setAttribute("type", "button");
btn.setAttribute("value", "submit");

let photo=document.createElement('p');
photo.innerHTML="";



btn.addEventListener("click",()=>{
if(t.value>=1 && t.value<=10){

    photo.innerHTML="";
    for(let j=0; j<Number(t.value); j++){
        
        photo.innerHTML+='<img src="./img/smily.png" alt="smily">';
        
    }
}
else {
    form.reset();
    photo.innerHTML="";    
    alert("the input value is unavailable. please enter numbers among 1-10");
    t.setAttribute("autofocus", "");
}
});


let body=document.querySelector('body');
form.append(p,t,photo,btn);
body.append(form);