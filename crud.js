//create form 

document.getElementById("createform").addEventListener("submit",function (res){

     res.preventDefault();

     firstName=document.getElementById("firstName").value;
     lastName=document.getElementById("lastName").value;
      email=document.getElementById("email").value;
   salary=document.getElementById("salary").value;
    position=document.getElementById("position").value;
    address=document.getElementById("Address").value;
const listemp={
    firstName:firstName,
    lastName:lastName,
    email:email,
    salary:salary,
    position:position,
    address:address
}

  fetch("http://localhost:8080/tab",{
          
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify(listemp)
  })
    
  .then(response => response.json())
   
  .then(data =>{
    window.location.href="table.html"
    console.log(data)
  })

  .catch(error =>{
    console.log(error)
  })


})





