let nme=document.getElementById("name");
let email=document.getElementById("email");
let sub=document.getElementById("submit");
var arr=JSON.parse(localStorage.getItem("data"))||[];
sub.addEventListener("click",(ex)=>{
    ex.preventDefault();
    let obj={
        name:nme.value,
        email:email.value
    };

    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    arr.forEach((e)=>{
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=e.name;
    let col2=document.createElement("td");
    col2.innerText=e.email;
    let col3=document.createElement("td");
    col3.innerText="delete";
    //col3.className="btn btn-danger";

    col3.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
       let ar=JSON.parse(localStorage.getItem("data"))||[];
       arr=ar;
        let a=ar.filter((ele)=>{
            return e.name!=ele.name;
        })
        localStorage.setItem("data",JSON.stringify(a));
    })
    row.append(col1,col2,col3);
    let col4=document.createElement("td");
    col4.innerText="edit";
    col4.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
        let ar=JSON.parse(localStorage.getItem("data"))||[];
        arr=ar;
        nme.value=e.name;
        email.value=e.email;
         let a=ar.filter((ele)=>{
             return e.name!=ele.name;
         })
         localStorage.setItem("data",JSON.stringify(a));
    })
    row.append(col1,col2,col3,col4);
    tbody.append(row);
})
})


