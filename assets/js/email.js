document.querySelector("contact-form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  // Get inputs
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  sendEmail(name, email, message);
}

// send email
function sendEmail(name, email, message) {
 
}
