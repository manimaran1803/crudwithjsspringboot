

//displayform


function displayform(){
       


    fetch("http://localhost:8080/tab")

    .then(response => response.json())

    .then(data =>{
        const table=document.getElementById("emptable");

        table.innerHTML=""

        data.forEach(element => {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${element.id}</td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.email}</td>
            <td>${element.salary}</td>
            <td>${element.position}</td>
            <td>${element.address}</td>
            <td><button class="aa"            onclick=editbyid(${element.id})>Edit</button>&nbsp;&nbsp;
            <button class="bb" onclick=deletebyid(${element.id})>delete</button></td>
            `;
            table.appendChild(row);
        })

        .catch(error =>{
            console.log(error)
        })

    })
  }

  displayform();





  //updateform 

   document.getElementById("updateform").addEventListener("submit",function(res){

    res.preventDefault();
    const id = document.getElementById("recordId").value;
   const  firstName=document.getElementById("firstName").value;
   const   lastName=document.getElementById("lastName").value;
   const   email=document.getElementById("email").value;
   const   salary=document.getElementById("salary").value;
   const   position=document.getElementById("position").value;
   const   address=document.getElementById("Address").value;

    const updatevalue={
        id:id,
        firstName:firstName,
        lastName:lastName,
        email:email,
        salary:salary,
        position:position,
        address:address
    }




      fetch(`http://localhost:8080/tab/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatevalue),
      })

      .then(response => response.json())

      .then(data =>{
                 
     
        console.log(data)
        
        displayform()
      })

      .catch(error =>{
        console.log(error)
      })

   })


























   //edit list


 function  editbyid(id){

      fetch(`http://localhost:8080/tab/${id}`)
      .then(response => response.json())

      .then(data =>{
         document.getElementById("recordId").value=data.id
        document.getElementById("firstName").value=data.firstName
        document.getElementById("lastName").value=data.lastName
        document.getElementById("email").value=data.email
        document.getElementById("salary").value=data.salary
       document.getElementById("position").value=data.position
       document.getElementById("Addresss").value=data.address
      })

 }







 function deletebyid(id) {
  


    const confirmDelete = confirm("Are you sure you want to delete this record?");
if (confirmDelete) {
// Send a DELETE request to the server to delete the record
fetch(`http://localhost:8080/tab/${id}`, {
    method: "DELETE"
})
.then(response => {
    if (response.status === 204) {

         displayform()
    } else {
        console.error("Error:", response.statusText);
    }
})
.catch(error => {
    console.error("Error:", error);
});
}

    
}

displayform();