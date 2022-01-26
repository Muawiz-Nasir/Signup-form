const form = document.getElementById('form');
const btn_submit = document.getElementById('formSubmit');
const firstName = document.getElementById('firstName');
const firstName1 = document.getElementById('firstName1')
const lastName = document.getElementById('lastName');
const lastName2 = document.getElementById('lastName2');
const email = document.getElementById('email');
const email3 = document.getElementById('email3');
const password = document.getElementById('password');
const password4 = document.getElementById('password4');

  btn_submit.addEventListener("click", function(e) {
    e.preventDefault();
  
      if(firstName.value.length < 3 || firstName.value.length === 0){
        firstName1.classList.remove('d-none')
      
      } else{
        firstName1.classList.add('d-none')
      }
      if(lastName.value.length < 3 || lastName.value.length === 0){
        lastName2.classList.remove('d-none')
      
      } else{
        lastName2.classList.add('d-none')
      }
      if(!email.value.includes('@') || email.value.length === 0){
        email3.classList.remove('d-none')
      
      } else{
        email3.classList.add('d-none')
      }
      if(password.value.length < 8 || password.value.length === 0){
        password4.classList.remove('d-none')
      
      } else{
        password4.classList.add('d-none')
      }

  });  