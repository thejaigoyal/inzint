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
  Email.send({
    Host: "smtp.gmail.com",
    Username: "addepesh@gmail.com",
    To: "deepeshadhikari@gmail.com",
    From: "addepesh@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message:${message}`
  }).then(message => alert("mail successfully sent"));
}
