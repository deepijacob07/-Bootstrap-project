
  function read(){
   let dots=document.getElementById("dots");
   let more=document.getElementById("more");
   let button=document.getElementById("button")

   if(dots.style.display==="none"){
      dots.style.display="inline";
      button.innerHTML="Read More";
      more.style.display="none";
   }
   else{
      dots.style.display="none";
      button.innerHTML="Read Less";
      more.style.display="inline";
   }
  }



  const form = document.getElementById('myForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const address = document.getElementById('address');

  
  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const addressError = document.getElementById('addressError');


  function validateForm(event) {
    let valid = true;

    usernameError.textContent = '';
    emailError.textContent = '';
    addressError.textContent = '';

    if (username.value.trim() === '') {
      usernameError.textContent = 'Username is required.';
      valid = false;
    } else if (username.value.length < 3) {
      usernameError.textContent = 'Username must be at least 3 characters long.';
      valid = false;
    }
    else if(username.value.length > 3){
      usernameError.style.borderColor="green"
      valid=true;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }
    if (address.value.trim() === '') {
      addressError.textContent = 'Address cannot be empty.';
      valid = false;
    }
    if (!valid) {
      event.preventDefault();
    }
  }
  form.addEventListener('submit', validateForm);


  


  function toggleHeart() {
    const heartIcon = document.getElementById('heart-icon');
    if (heartIcon.classList.contains('fa-regular')) {
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
    } else {
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
    }
  }

  var crt=document.querySelector("cart")



