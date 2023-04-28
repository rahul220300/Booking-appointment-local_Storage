let nme=document.getElementById("name");
let email=document.getElementById("email");
let sub=document.getElementById("submit");
window.addEventListener("DOMContentLoaded",()=>{
    axios
         .get("https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData")
         .then((res)=>{
            arr=res.data||[];
            dispaly(arr);
         })
         .catch((er)=>{
            console.log(er)
         })
})
sub.addEventListener("click",(ex)=>{
    ex.preventDefault();
    // let obj={
    //     name:nme.value,
    //     email:email.value
    // };
    axios
        .post("https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData",{
            name:nme.value,
            email:email.value
        })
       
        .catch((er)=>{
            console.log(er);
        })


       let arr;
    axios
         .get("https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData")
         .then((res)=>{
            arr=res.data||[];
            dispaly(arr);
         })
         .catch((er)=>{console.log(er)})

        })
   
   
    function dispaly( arr){
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
       
        axios
            .delete(`https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData/${e._id}`);
            
    })
    let col4=document.createElement("td");
    col4.innerText="edit";
    col4.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
        axios
        .get(`https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData/${e._id}`)
        .then((res)=>{
           nme.value=res.data.name;
           email.value=res.data.email;
            console.log(res)
        })
        axios
            .delete(`https://crudcrud.com/api/47db31077454481e8c8a9e5b4f854c8e/AddData/${e._id}`);
    })
    row.append(col1,col2,col3,col4);
    tbody.append(row);
})
}