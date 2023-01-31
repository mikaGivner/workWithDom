let b1=document.querySelector("#box1");
let b2=document.querySelector("#box2");
const b3=document.querySelector("#box3");
const b4=document.querySelector("#box4");
const b5=document.querySelector("#box5");
const result=document.querySelector("h3")
let arr=[b1, b2, b3, b4, b5];


arr.forEach(box =>{
    box.addEventListener("keyup", function(){
       if(box.value.length!==0) box.nextElementSibling.focus();
   f();
});
box.addEventListener("keyup", function(){
    if(box.value.length==0) box.previousElementSibling.focus();
    
    f();
});
box.addEventListener('paste', (event) => {
    // event.preventDefault();

    let paste = (event.clipboardData || window.clipboardData).getData('text');
  if(paste===result.textContent) alert("ok");
   let str=Array.from(paste);
   console.log(str);
   arr.forEach((x,i)=>{

x.value="";
x.value=`${str[i]}`;
if(x.value==='undefined'){
    x.value="";  
}

   });
});
});

const f=()=>{
    if(b1.value!=="" && b2.value!=="" && b3.value!=="" && b4.value!=="" && b5.value!==""){
        if(b1.value==="y" && b2.value==="d" && b3.value==="3" && b4.value==="s" && b5.value==="5") alert("ok");
    }

}






