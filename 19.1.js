 let btn = document.getElementById("btn");

 
 btn.addEventListener("click", function(){
     let titleTwo = document.querySelector(".start-here");
    
     
    titleTwo.innerHTML = "main title";

    const newSubtitle=document.createElement("li");
    newSubtitle.innerHTML="sub title 4";

    let pL=document.querySelector(".parentList");
    pL.appendChild(newSubtitle);

   
    let last=document.getElementsByTagName("li")[5];
    last.remove();

    let title=document.getElementById("title");
    title.innerHTML="Master Of The Dom";
    
    let p=document.querySelector("p");
    p.style.color='#fcfc';

});