const form2 = document.querySelector('.form2');

form2.addEventListener('submit',event =>{
    event.preventDefault();
    const formData = new FormData(form2);
    const data = Object.fromEntries(formData);
    console.log(data);
   
    
     fetch('https://nischal-backend.onrender.com/api/v1/companies/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)

    });
    


})






