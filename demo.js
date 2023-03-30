let nme=document.getElementById("name");
let email=document.getElementById("email");
let sub=document.getElementById("submit");
let arr=JSON.parse(localStorage.getItem("data"))||[];
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj={
        name:nme.value,
        email:email.value
    };

    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
});

showUserNameOnScreen(obj);
function showUserNameOnScreen(obj){
    const parentElm=document.getElementById('listItem');
    const children = document.createElement('li');
    children.textContent = obj.name +" "+obj.email ;
    parentElm.appendChild(children);
}


