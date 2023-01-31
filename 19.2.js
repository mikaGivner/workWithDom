const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
    
 const ol=document.createElement("ol");
 ol.setAttribute("style", "list-style-type: none;");
 users.forEach((item) => {
     let l = document.createElement('li');
     l.innerText=`${item.firstName} ${item.lastName}`;
     ol.appendChild(l);
     l.setAttribute("data-id", `${item.id}`)
    });
    const body=document.querySelector("body");
    body.appendChild(ol);
   
console.log(ol);


    

