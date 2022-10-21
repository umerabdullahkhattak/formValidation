const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
    email.style.color = "red";
    
  } else {
    email.style.color = "green"
    email.setCustomValidity("");
  }
});



 
const zip = document.getElementById("zipcode");
const zipRegExp = /^\d{5}$/;
zip.addEventListener("input", (event) => {
  
    const isValid =  zipRegExp.test(zip.value);
    
  
  if(isValid === true){
    zip.style.color = "green"
    zip.setCustomValidity("")

  }
  else{
    zip.style.color = "red"
    zip.setCustomValidity("Zip Code is a five digit code")
    zip.reportValidity();
  }
});
 const fname = document.getElementById("fname");
 const nameRegExp = /^[A-Za-z ]+$/;
 fname.addEventListener("input", (event) => {
  const isValid = nameRegExp.test(fname.value);
  if(isValid === true){
    fname.style.color = "green"
    fname.setCustomValidity("")

  }
  else{
    fname.style.color = "red"
    fname.setCustomValidity("Here we use only alphabets for name")
    fname.reportValidity();
  }
 })

 const lname = document.getElementById("lname");
 lname.addEventListener("input", (event) => {
  const isValid = nameRegExp.test(lname.value);
  if(isValid === true){
    lname.style.color = "green"
  }
  else{
    lname.style.color = "red";
    lname.setCustomValidity("Here we use only alphabets for name");
    lname.reportValidity()
  }
 })
 const country = document.getElementById("country");
 country.addEventListener("input", (event) => {
  const isValid = nameRegExp.test(country.value);
  if(isValid === true){
    country.style.color = "green"
  }
  else{
    country.style.color = "red";
    country.setCustomValidity("Here countries use only alphabets for names");
    country.reportValidity()
  }
 })

 const pass = document.getElementById("pass");
 const passcon = document.getElementById("passcon");
 const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
 pass.addEventListener("input", (event) => {
  const isValid = passRegExp.test(pass.value);
  if(isValid === true){
    if(passcon.value === pass.value){
      pass.style.color = "green"
      pass.setCustomValidity("")
    }
    else{
      pass.style.color = "red";
      pass.setCustomValidity("Password must contain 'Minimum eight characters, at least one letter and one number' passwords must match")
      pass.reportValidity();
    }
  }
 })

 passcon.addEventListener("input", (event) => {
  const isValid = passRegExp.test(passcon.value);
  if(isValid === true){
    if(passcon.value === pass.value){
      passcon.style.color = "green"
      pass.setCustomValidity("")
    }
    else{
      passcon.style.color = "red";
      passcon.setCustomValidity("Password must contain 'Minimum eight characters, at least one letter and one number' passwords must match")
      passcon.reportValidity();
    }
  }
 })



