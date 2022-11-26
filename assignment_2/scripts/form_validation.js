/////////////////////////////////////Form Validation////////////////////////////////////////
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const inquiryError = document.querySelector('#inquiryError');



function validation(e){
  let valid = true;

  //Name validation
  if (contact_form.firstName.value === ''){
    nameError.textContent = 'Name is a required field, Please Enter Your Name.';
    valid = false;
  }

  //Email validation
  if (contact_form.emailAddress.value === ''){
    emailError.textContent = 'Email is a required field, Please Enter Your Email.';
    valid = false;
  }

  if (contact_form.emailAddress.value !== "" && !contact_form.emailAddress.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.textContent="Please enter a valid email address";
    valid = false;
  }

  //Details Validation
  if (contact_form.detailsOfInquiry.value === ''){
    inquiryError.textContent = 'Details of inquiry is a required field, Please tell us the details of your inquiry.';
    valid = false;
  }

  if (valid !== true){
    e.preventDefault();
  }
}
//Form submit button --calls validation function
const formButton = document.querySelector('#form_submit');
formButton.addEventListener('click', validation)